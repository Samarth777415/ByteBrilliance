export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async authorized({ auth, request }) {
      const user = auth?.user;
      const pathname = request.nextUrl?.pathname;
      
      console.log("User:", user);
      console.log("Pathname:", pathname);

      const isOnAdminPanel = pathname.startsWith("/admin");
      const isOnBlogPage = pathname.startsWith("/blog");
      const isOnLoginPage = pathname.startsWith("/login");

      if (isOnAdminPanel && !user?.isAdmin) {
        console.log("Unauthorized access to admin panel. Redirecting to login.");
        return false;
      }

      if (isOnBlogPage && !user) {
        console.log("Unauthorized access to blog page. Redirecting to login.");
        return false;
      }

      if (isOnLoginPage && user) {
        console.log("Authenticated user trying to access login page. Redirecting to home.");
        
        return Response.redirect(new URL("/", request.nextUrl));
      }

      console.log("Access granted.");
      return true;
    },
  },
};
