import { deviceService } from './services/feather';
import { readable, writable } from 'svelte/store';

const initDevices = async () => {
  const res = await deviceService.find();
  return res;
};

console.log(initDevices());

export const name = writable('world');
export const devices = readable(initDevices(), function start(set) {
  deviceService.on('created', () => set(initDevices()));
});
