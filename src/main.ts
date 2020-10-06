import App from './App.svelte';

import { deviceService } from './services/feather';

deviceService.on('created', (device) => console.log(device));

const app = new App({
  target: document.body,
});

export default app;
