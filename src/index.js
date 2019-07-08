import Fetch from 'node-fetch'
import { endpoint } from '../src/config'

let url = endpoint + 'site'

export const getSite = async url => {
    try {
      const response = await Fetch(url)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }