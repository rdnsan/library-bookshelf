/* eslint-disable no-console */
const registerSW = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service worker registration success');
    } catch (err) {
      console.log(err);
    }
  }
  console.log('Service worker not Support in this Browser');
};

export default registerSW;
