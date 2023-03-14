export type LoginResponse = {
  data: {
    tokens: {
      tokenType: string;
      accessToken: string;
      refreshToken: string;
      expiresIn: string;
    };
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      photo: string;
      active: boolean;
    };
  };
  success: 'SUCCESS' | string;
};
