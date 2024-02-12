export const addOnlineEventListener = (callback: Function, params?: any) => {
  const onlineListener = () => {
    window.removeEventListener('online', onlineListener);
    if (params) {
      callback(params);
    }
    callback();
  };
  window.addEventListener('online', onlineListener);
};
