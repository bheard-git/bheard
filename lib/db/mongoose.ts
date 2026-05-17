import mongoose from "mongoose";

const globalForMongoose = globalThis as unknown as {
  mongooseConn?: typeof mongoose;
  mongoosePromise?: Promise<typeof mongoose>;
  listenersAttached?: boolean;
};

const CONNECTED = 1;

function attachConnectionListeners() {
  if (globalForMongoose.listenersAttached) return;
  globalForMongoose.listenersAttached = true;

  const conn = mongoose.connection;
  conn.on("disconnected", () => {
    console.warn("[mongodb] disconnected — clearing connection cache");
    resetMongooseCache();
  });
  conn.on("error", (err) => {
    console.error("[mongodb] connection error:", err.message);
    resetMongooseCache();
  });
  conn.on("reconnected", () => {
    console.warn("[mongodb] reconnected");
  });
}

export function resetMongooseCache() {
  globalForMongoose.mongooseConn = undefined;
  globalForMongoose.mongoosePromise = undefined;
}

export function getConnectionState() {
  return mongoose.connection.readyState;
}

export function isDatabaseConnected() {
  return getConnectionState() === CONNECTED;
}

export async function connectToDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (globalForMongoose.mongooseConn && isDatabaseConnected()) {
    return globalForMongoose.mongooseConn;
  }

  if (globalForMongoose.mongooseConn && !isDatabaseConnected()) {
    resetMongooseCache();
  }

  if (!globalForMongoose.mongoosePromise) {
    attachConnectionListeners();
    globalForMongoose.mongoosePromise = mongoose
      .connect(process.env.DATABASE_URL, {
        autoIndex: process.env.NODE_ENV !== "production",
        serverSelectionTimeoutMS: 10_000,
        socketTimeoutMS: 45_000,
        maxPoolSize: 10,
        heartbeatFrequencyMS: 10_000,
      })
      .then((conn) => {
        globalForMongoose.mongooseConn = conn;
        return conn;
      })
      .catch((err) => {
        resetMongooseCache();
        console.error("[mongodb] connect failed:", err.message);
        throw err;
      });
  }

  globalForMongoose.mongooseConn = await globalForMongoose.mongoosePromise;
  return globalForMongoose.mongooseConn;
}
