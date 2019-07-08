import chai from 'chai'
import { expect } from 'chai'
import { endpoint } from '../src/config'
import { getSite } from '../src/index'

chai.use(require('chai-url'))
chai.use(require('chai-json'))


describe('Endpoint', () => {
    it('tests endpoint exists', () => {
        expect(endpoint).to.exist
    })
    it('tests endpoint for http', () => {
        chai.expect(endpoint).to.have.protocol('http')
    })
    it('tests endpoint for api path', () => {
        chai.expect(endpoint).to.contain.path('/api')
    })
})

describe('Get Site', () => {
    it('tests getting site information', () => {
        expect(getSite(endpoint)).to.exist
        expect(getSite(endpoint)).to.be.jsonObj()
    })
})

