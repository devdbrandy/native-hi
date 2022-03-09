import {localStorageService} from './local-storage.service';

export const authenticateUser = async (user: {
  email: string;
  password: string;
}) => {
  const storage = localStorageService();
  const authUser = await storage.store('authUser', user);

  return authUser;
};

export const isAuthenticated = async () => {
  const storage = localStorageService();
  const authUser = await storage.get('authUser');

  return authUser;
};
