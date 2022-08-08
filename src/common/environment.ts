export type AppEnvironment = {
  API_URL: string;
}

export const getAppEnvironment: () => AppEnvironment = () => {
  if (process.env.NODE_ENV === 'development') {
    return developmentEnvironment;
  } else {
    // TODO: Add other environments
    return developmentEnvironment;
  }
};

const developmentEnvironment: AppEnvironment = {
  API_URL: 'http://localhost:8080/api',
};
