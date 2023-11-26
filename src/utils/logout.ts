import {clearIsAuthenticatd, clearStoredUser, clearToken} from './token';

export async function logout() {
  clearToken().then(() => console.log('cleared token'));
  clearIsAuthenticatd().then(() => console.log('cleared isAuthentication'));
  clearStoredUser().then(() => console.log('cleared user'));
}
