const hostName = process.env.MAIN_HOSTNAME || "localhost";
const protocol = process.env.__DEV__ ? "http" : "https";
const port = process.env.MAIN_PORT ? process.env.MAIN_PORT : "443";

const baseUrl = `${protocol}://${hostName}:${port}/api`;

export const ApiPath = {
  USER: {
    CREATE: `${baseUrl}/user`,
    LOGIN: `${baseUrl}/user/login`,
    REFRESH_TOKEN: `${baseUrl}/user/refresh`,
    UPDATE_PASSWORD: `${baseUrl}/user/password`,
    UPDATE_AVATAR: `${baseUrl}/user/avatar`,
    AVATAR: `${baseUrl}/uploads/avatar/:src`,
  },

  FORUM: {
    TOPIC: {
      ALL: `${baseUrl}/forum/topic`,
      CREATE: `${baseUrl}/forum/topic`,
      VIEW: `${baseUrl}/forum/topic/:id`,
    },
    COMMENT: {
      CREATE: `${baseUrl}/forum/comment`,
    },
  },

  GAME: {
    LEADERBOARD: {
      ALL: `${baseUrl}/game/result`,
    },
    RESULT: {
      CREATE: `${baseUrl}/game/result`,
    },
  },
};
