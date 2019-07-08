import Fetch from 'node-fetch'
import { endpoint } from '../src/config'

export function getSiteInfo(endpoint) {
    let api = endpoint + 'site'
    Fetch(endpoint).then((data) => {
        return data
    })
}
let test = getSiteInfo(endpoint)
console.log(test)