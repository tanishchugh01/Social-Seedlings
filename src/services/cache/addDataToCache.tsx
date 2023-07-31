const addDataToCache = async (cacheName: string, query: string, response: any) => {
  const data = JSON.stringify(response);

  caches.open(cacheName).then((cache) => {
    cache.put(query, new Response(data));
  });
};

export default addDataToCache;
