import { Types } from "mongoose";

export interface UserIdLike {
  toString(): string;
}

export function asObjectId(id: string | Types.ObjectId | UserIdLike): Types.ObjectId {
  if (id instanceof Types.ObjectId) return id;
  return new Types.ObjectId(typeof id === "string" ? id : id.toString());
}

export function displayName(user: {
  googleName?: string | null;
  googleEmail?: string | null;
  telegramUsername?: string | null;
  telegramFirstName?: string | null;
  guestName?: string | null;
}): string {
  return (
    user.googleName ??
    user.telegramFirstName ??
    user.telegramUsername ??
    user.guestName ??
    user.googleEmail ??
    "Guest"
  );
}

export function avatarUrl(user: {
  googleAvatar?: string | null;
  telegramPhotoUrl?: string | null;
}): string | null {
  return user.googleAvatar ?? user.telegramPhotoUrl ?? null;
}
