const registerSW = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
    } catch (err) {
      console.error(err);
    }
  }
};

export default registerSW;
