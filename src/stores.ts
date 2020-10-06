import { writable } from 'svelte/store';
import API from './services/api';

const requestDevices = async () => {
  try {
    const response = await API.get('/devices', '');
    return response.results;
  } catch (error) {
    console.error(error);
  }
};

console.log(requestDevices());

export const name = writable('world');
export const devices = writable(requestDevices());
