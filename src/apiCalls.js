const URL = 'http://localhost:3001/api/v1/urls'

export const getUrls = () => {
  return fetch(URL)
      .then(response => response.json())
}

