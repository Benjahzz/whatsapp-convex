import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { Id } from "./_generated/dataModel";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const user = await ctx.db.get(userId);

    if (!user) {
      return null;
    }

    let userImage = null;
    if (user.image) {
      userImage = await ctx.storage.getUrl(user.image);
    }
    return {
      ...user,
      imageUrl: userImage,
    };
  },
});

export const current2 = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const user = await ctx.db.get(userId);

    if (!user) {
      return null;
    }

    let userImage = null;
    if (user.image) {
      userImage = await ctx.storage.getUrl(user.image);
    }
    return {
      ...user,
      imageUrl: userImage,
    };
  },
});

export const update = mutation({
  args: {
    name: v.optional(v.string()),
    info: v.optional(v.string()),
    image: v.optional(v.id("_storage")),
  },
  handler: async (ctx, data) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("User not found");
    }
    await ctx.db.patch(userId, data);
    return userId;
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
