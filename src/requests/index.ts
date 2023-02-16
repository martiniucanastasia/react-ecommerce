const defaultHeaders = {
  "Content-type": "application/json",
};

export const get = <T>(url: string, options: RequestInit = {}) =>
  fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }).then((response) => response.json() as Promise<T>);
