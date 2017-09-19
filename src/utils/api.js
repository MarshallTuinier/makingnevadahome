const fetchAllProperties = () => {
  const url = 'https://api.simplyrets.com/properties?status=active&limit=500&lastId=0'
  const username = 'simplyrets'
  const password = 'simplyrets'

  //Below we encode the 'username:password' string to base64 for use in the Auth header
  const encoded = btoa(`${username}:${password}`)

  let headers = new Headers();

  headers.append(`Authorization`, `Basic ${encoded}`);

  return fetch(url, {method:'GET', headers: headers,})
    .then(response => response.json())
    .catch(error => {
      return 'error'
    })
}

const fetchSingleProperty = (mlsId) => {
  const url = 'https://api.simplyrets.com/properties/' + mlsId
  const username = 'simplyrets'
  const password = 'simplyrets'

  //Below we encode the 'username:password' string to base64 for use in the Auth header
  const encoded = btoa(`${username}:${password}`)

  let headers = new Headers();

  headers.append(`Authorization`, `Basic ${encoded}`);

  return fetch(url, {method:'GET', headers: headers,})
    .then(response => response.json())
    .catch(error => console.log(error))
}

export { fetchAllProperties, fetchSingleProperty }
