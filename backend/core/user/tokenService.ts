import jwt from "jsonwebtoken";

import UserDto from "./userDto";
import UserToken from "./userTokenModel";

class TokenService {
  accessSecret: string;

  refreshSecret: string;

  constructor() {
    this.accessSecret =
      process.env.JWT_ACCESS_SECRET ||
      "vemjwmbwqlrixcsihobticmjuwcykauslbeercjh";
    this.refreshSecret =
      process.env.JWT_REFRESH_SECRET ||
      "veqwqlhuqrjaypvbkdvxcbphudzoadpmhspsfcaj";
  }

  generateTokens(payload: UserDto) {
    const { accessSecret, refreshSecret } = this;

    const accessToken = jwt.sign({ ...payload }, accessSecret, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ ...payload }, refreshSecret, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async removeToken(refreshToken: string) {
    return UserToken.destroy({
      where: {
        token: refreshToken,
      },
    });
  }

  async findToken(refreshToken: string) {
    return UserToken.findOne({
      where: {
        token: refreshToken,
      },
    });
  }

  validateAccessToken(token: string) {
    try {
      return jwt.verify(token, this.accessSecret) as UserDto;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      return jwt.verify(token, this.refreshSecret) as UserDto;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId: number, refreshToken: any) {
    const tokenData = await UserToken.findOne({ where: { userId } });

    if (tokenData) {
      return tokenData.update({ token: refreshToken });
    }
    return UserToken.create({
      userId,
      token: refreshToken,
    });
  }
}

export default new TokenService();
