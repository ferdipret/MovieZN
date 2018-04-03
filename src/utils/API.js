import axios from 'axios'

import constants from 'constants/API_CONSTANTS'

/* prettier-ignore */
export default function(args) {
  const { REQUEST_URL, API_KEY } = constants

  const URL = (() => {
    // We'll build out the request url based on the state of the app
    // and default/user selected filters
    switch (args.type) {
      case 'discover':
        return `${REQUEST_URL}${args.type}/movie?api_key=${API_KEY}`
      case 'search':
        const value = encodeURI(args.searchValue)
        return `${REQUEST_URL}${args.type}/movie?api_key=${API_KEY}&query=${value}`
      default:
        return `${REQUEST_URL}/discover/movie?api_key=${API_KEY}`
    }
  })()

  return axios.get(URL)
}
