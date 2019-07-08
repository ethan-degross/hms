import { expect } from 'chai'
import { endpoint } from '../src/config'



describe('config', () => {
    it('tests that there is an endpoint', () => {
        expect(endpoint).to.exist
    })
})