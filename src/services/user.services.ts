import { get, post, put } from 'services/api';

export async function confirmAccount(token: string): Promise<any> {
  const response = await put(`users/confirm-account?token=${token}`);
  return response;
}

export async function forgotPassword(formData: any): Promise<any> {
  const response = await post('users/forgot-password', formData);
  return response;
}

export async function initialize(): Promise<any> {
  const response = await get('users/profile');
  return response;
}

export async function login(formData: any): Promise<any> {
  const response = await post('auth/login', formData);
  return response;
}

export async function logout(): Promise<any> {
  const response = await post('auth/logout');
  return response;
}

export async function register(formData: any): Promise<any> {
  const response = await post('auth/register', formData);
  return response;
}

export async function resetPassword(formData: any): Promise<any> {
  const response = await put('users/reset-password', formData);
  return response;
}

export async function update(formData: any): Promise<any> {
  const response = await put('users/update', formData);
  return response;
}
