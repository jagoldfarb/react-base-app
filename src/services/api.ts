import axios from 'axios';

import { getCookie } from 'helpers/cookies';
import { API_BASE_URL } from 'configs/configs';

const api = axios.create({
  baseURL: API_BASE_URL,
});

function getOptions() {
  const accessToken = getCookie('accessToken');
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  return options;
}

function errorResponse(error: any) {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data.message;
  }
  return new Error(message);
}

export async function get(url: string, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.get(url, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function post(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.post(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function put(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.put(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}
