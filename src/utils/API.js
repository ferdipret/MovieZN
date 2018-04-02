import axios from 'axios'

import constants from 'constants/API_CONSTANTS'

export default function(args) {
  const { REQUEST_URL, API_KEY } = constants

  const URL = (() => {
    // We'll build out the request url based on the state of the app
    // and default/user selected filters
    switch (args.type) {
      case 'discover':
        return `${REQUEST_URL}${args.type}/movie?api_key=${API_KEY}`
      default:
        return `${REQUEST_URL}/discover/movie?api_key=${API_KEY}`
    }
  })()
  return axios.get(URL)
}
