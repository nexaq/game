export const ROUTES = {
  HOME: {
    INDEX: "/",
  },
  LEADERBOARD: {
    INDEX: "/leaderboard",
  },
  PLAY: {
    INDEX: "/play",
  },
  FORUM: {
    VIEW: "/forum/:id",
    INDEX: "/forum",
  },
  PROFILE: {
    INDEX: "/profile",
  },
  SIGN_IN: {
    INDEX: "/sign-in",
  },
  SIGN_UP: {
    INDEX: "/sign-up",
  },
  NOT_FOUND_PAGE: {
    INDEX: "/404",
  },
};

export const forumViewUrl = (id: number) =>
  ROUTES.FORUM.VIEW.replace(":id", id.toString());

export const GLOBAL_ROUTES = {
  NOT_FOUND: "/*",
};
