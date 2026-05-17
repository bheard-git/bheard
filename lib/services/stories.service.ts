import { Types } from "mongoose";
import { withDbRetry } from "@/lib/db/withDbRetry";
import { SuccessStoryModel } from "@/lib/db/models";
import type { StoryInput, StoryUpdateInput } from "@/lib/validators/stories.validator";

function requireDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }
}

function runDb<T>(fn: () => Promise<T>): Promise<T> {
  requireDb();
  return withDbRetry(fn);
}

export async function listPublishedStories() {
  return runDb(async () => {
    const rows = await SuccessStoryModel.find({ published: true }).sort({ updatedAt: -1 });
    return rows.map((row) => row.toJSON());
  });
}

export async function listAllStories() {
  return runDb(async () => {
    const rows = await SuccessStoryModel.find({}).sort({ updatedAt: -1 });
    return rows.map((row) => row.toJSON());
  });
}

export async function getStoryBySlug(slug: string) {
  return runDb(async () => {
    const row = await SuccessStoryModel.findOne({ slug });
    return row ? row.toJSON() : null;
  });
}

export async function getStoryById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null;
  return runDb(async () => {
    const row = await SuccessStoryModel.findById(id);
    return row ? row.toJSON() : null;
  });
}

export async function createStory(input: StoryInput) {
  return runDb(async () => {
    const row = await SuccessStoryModel.create(input);
    return row.toJSON();
  });
}

export async function updateStoryBySlug(slug: string, input: StoryUpdateInput) {
  return runDb(async () => {
    const row = await SuccessStoryModel.findOneAndUpdate({ slug }, { $set: input }, { new: true });
    if (!row) throw new Error("Story not found");
    return row.toJSON();
  });
}

export async function updateStoryById(id: string, input: StoryUpdateInput) {
  if (!Types.ObjectId.isValid(id)) throw new Error("Invalid story id");
  return runDb(async () => {
    const row = await SuccessStoryModel.findByIdAndUpdate(id, { $set: input }, { new: true });
    if (!row) throw new Error("Story not found");
    return row.toJSON();
  });
}

export async function deleteStoryBySlug(slug: string) {
  return runDb(async () => {
    const row = await SuccessStoryModel.findOneAndDelete({ slug });
    if (!row) throw new Error("Story not found");
    return row.toJSON();
  });
}
