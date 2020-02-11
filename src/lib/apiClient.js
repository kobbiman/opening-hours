import fetch from 'isomorphic-unfetch'

const headers = { 'Content-Type': 'application/json' }
const baseUrl = 'http://localhost:3000/api'

function get(url) {
  return fetch(`${baseUrl}${url}`, {
    headers,
  }).then(response => response.json())
}

export const getOpeningHours = () => get('/openingHours')

export default {
  getOpeningHours,
}
