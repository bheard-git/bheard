import { Types } from "mongoose";
import { withDbRetry } from "@/lib/db/withDbRetry";
import { CareerModel } from "@/lib/db/models";
import type { CareerInput, CareerUpdateInput } from "@/lib/validators/careers.validator";

function requireDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }
}

function runDb<T>(fn: () => Promise<T>): Promise<T> {
  requireDb();
  return withDbRetry(fn);
}

export async function listActiveCareers() {
  return runDb(async () => {
    const rows = await CareerModel.find({ active: true }).sort({ createdAt: -1 });
    return rows.map((row) => row.toJSON());
  });
}

export async function listAllCareers() {
  return runDb(async () => {
    const rows = await CareerModel.find({}).sort({ updatedAt: -1 });
    return rows.map((row) => row.toJSON());
  });
}

export async function getActiveCareerBySlug(slug: string) {
  return runDb(async () => {
    const row = await CareerModel.findOne({ slug, active: true });
    return row ? row.toJSON() : null;
  });
}

export async function getCareerBySlug(slug: string) {
  return runDb(async () => {
    const row = await CareerModel.findOne({ slug });
    return row ? row.toJSON() : null;
  });
}

export async function getCareerById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null;
  return runDb(async () => {
    const row = await CareerModel.findById(id);
    return row ? row.toJSON() : null;
  });
}

export async function createCareer(input: CareerInput) {
  return runDb(async () => {
    const row = await CareerModel.create(input);
    return row.toJSON();
  });
}

export async function updateCareerBySlug(slug: string, input: CareerUpdateInput) {
  return runDb(async () => {
    const row = await CareerModel.findOneAndUpdate({ slug }, { $set: input }, { new: true });
    if (!row) throw new Error("Career not found");
    return row.toJSON();
  });
}

export async function updateCareerById(id: string, input: CareerUpdateInput) {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid career id");
  return runDb(async () => {
    const row = await CareerModel.findByIdAndUpdate(id, { $set: input }, { new: true });
    if (!row) throw new Error("Career not found");
    return row.toJSON();
  });
}

export async function deleteCareerBySlug(slug: string) {
  return runDb(async () => {
    const row = await CareerModel.findOneAndDelete({ slug });
    if (!row) throw new Error("Career not found");
    return row.toJSON();
  });
}

export async function deleteCareerById(id: string) {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid career id");
  return runDb(async () => {
    const row = await CareerModel.findByIdAndDelete(id);
    if (!row) throw new Error("Career not found");
    return row.toJSON();
  });
}
