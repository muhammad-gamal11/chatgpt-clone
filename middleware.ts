import { authMiddleware } from "@clerk/nextjs";

// restricted route , whenever someone tries
// to access any other route they get redirected to home page
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
