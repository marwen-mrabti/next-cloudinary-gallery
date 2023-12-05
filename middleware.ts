import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/sign-in", "/sign-up", "/", "/photos/[id]"]
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/photos/[id]", "/"]
};
