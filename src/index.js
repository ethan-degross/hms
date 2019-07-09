import Fetch from 'node-fetch'
import { endpoint } from '../src/config'

/**
 * Gets site information for a specified Omeka API endpoint
 *
 * @param {string} endpoint - An Omeka API URL
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

/**
 * Gets a list of site collections
 *
 * @param {string} endpoint - An Omeka API URL
 * @return {promise} - Returns an array of collections belonging to individual sites
 */
export async function getCollections(endpoint) {
  let url = endpoint + 'collections'
  try {
    const response = await Fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

/**
 * Checks if a collection array is empty
 *
 * @param {array} collectionList - An array of collection objects
 * @return {boolean} - Returns false if the array is empty, true if it has an collection objects
 */
export function hasCollections(collectionList) {
  if (collectionList.length == 0) {
    return false
  } else {
    return true
  }
}

/**
 * Checks if the list has items
 *
 * @param {array} itemList - An array of item objects
 * @return {boolean} - Returns false if the array is empty, true if it has an item object(s)
 */
export function hasItems(itemList) {
  if (itemList.length == 0) {
    return false
  } else {
    return true
  }
}

/**
 * Gets a list of site items
 *
 * @param {array} itemList - An array of item objects
 * @return {promise} - Returns false if the array is empty, true if it has an item object(s)
 */
export async function getItems(endpoint) {
  let url = endpoint + 'collections'
  try {
    const response = await Fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}