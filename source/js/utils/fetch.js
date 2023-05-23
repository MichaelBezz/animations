export const fetchApi = (url, onSuccess, onError) => {
  return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        if (onSuccess) {
          onSuccess(data);
        }
        return data;
      })
      .catch((err) => {
        if (onError) {
          onError(err);
        }
      });
};
