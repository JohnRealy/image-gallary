const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
const BASE_URL = 'https://api.unsplash.com';

export function getPhotos(query, page) {
  const params = {
    query,
    per_page: 12,
    page,
    orientation: 'portrait',
    client_id: API_KEY,
  };
  const options = new URLSearchParams(params);
  return fetch(`${BASE_URL}/search/photos/?${options}`).then(res => {
    if (!res.ok) {
      throw new Error('Ups. Sthg wrong!');
    }

    return res.json();
  });
}
