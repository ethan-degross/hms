/**
 * Entrypoint for the HMS Library
 * @module Index
 */

import Fetch from 'node-fetch'
import { endpoint } from '../src/config'

/**
 * Gets site information for a specified Omeka API endpoint
 *
 * @param {string} endpoint - An Omeka API URL
 * @memberof Index
 * @return {promise} - Returns a valid JSON representaton of the site information
 */
export async function getSiteInfo(endpoint) {
    let url = endpoint + 'site'
    try {
        const response = await Fetch(url)
        const json = await response.json()
        return json
      } catch (error) {
        console.log(error)
      }
}

