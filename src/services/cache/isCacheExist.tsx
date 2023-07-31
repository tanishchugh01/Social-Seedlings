const isCacheExist: Function = async (key: string, url: string) => {
  let cacheStore;

  try {
    cacheStore = await caches.open(key);
  } catch (err) {
    console.log(err);
  }

  const cacheResponse = await cacheStore.match(url);

  if (cacheResponse) {
    return true;
  } else {
    return false;
  }
};

export default isCacheExist;