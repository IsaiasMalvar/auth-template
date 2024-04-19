import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordToken = await db.passwordToken.findUnique({
      where: { token },
    });

    return passwordToken;
  } catch {
    return null;
  }
};
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordToken = await db.passwordToken.findFirst({
      where: { email },
    });

    return passwordToken;
  } catch {
    return null;
  }
};
