import { checkAuth as checkIfAuth } from "client/api/user";

export default async function isAuth() {
  try {
    const response = await checkIfAuth();

    if (response.status === 200 && response.data?.accessToken) {
      // update access token
      const { user, accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      return user ?? null;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}
