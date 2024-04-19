export const publicRoutes = ["/", "/new-verification"];

/* An array of routs that are used for authentication
These routes will redirect logged in users to /settings */

export const authRoutes = ["/login", "/register", "/error", "/reset"];

/**
 *Prefix for api authentication routes
 *routes that start with this prefiex are used for api authentication purposes
 **/

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
