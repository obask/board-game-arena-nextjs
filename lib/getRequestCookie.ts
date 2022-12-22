// lib/getRequestCookie.ts
import { unsealData } from "iron-session";
import { cookies } from "next/headers";
import { User } from "../pages/api/user";

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns SessionUser or null
 */
export async function getRequestCookie(): Promise<User | undefined> {
    const cookieName = 'iron-session/examples/next.js' as string
    const found = cookies().get(cookieName)

    if (!found) return

    const { user } = await unsealData(found.value, {
        password: "process.env.SECRET_COOKIE_PASSWORD" as string,
    })
    console.log("user =", user)
    return user as unknown as User;
}