interface IHttpClientOption {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'DELETE';
  body?: any;
}

const httpClient = async ({url, method, body}: IHttpClientOption) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer OGQxZjg2ZTEtNGQ5NC00YTFjLWE1NjgtYjE5MjY3NDMyMDkx',
    },
    body: JSON.stringify(body),
  });
  const jsonData = await res.json();

  return jsonData;
};

export default httpClient;
