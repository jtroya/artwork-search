export function api<T>(url: string, method = 'GET'): Promise<T> {
  return window
    .fetch(url, {
      method: method.toUpperCase(),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .catch((error: Error) => {
      throw error;
    });
}
