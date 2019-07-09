import chai from 'chai'
import { expect } from 'chai'
import { endpoint } from '../src/config'
import { getSiteInfo, getCollections, hasCollections } from '../src/index'
import { mockEmptyCollections, mockCollections} from './mock-data'
chai.use(require('chai-url'))

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
        return getSiteInfo(endpoint).then((data) => {                
            expect(data).to.have.all.keys('omeka_url', 'author', 'copyright', 'description', 'omeka_version', 'title')
        })       
    })
})

describe('Get Collections', () => {
    it('tests getting site collections', () => {
        return getCollections(endpoint).then((data) => {
            expect(data).to.be.an('array')
        })
    })
    it('tests if there are collections', () => {
        expect(hasCollections(mockEmptyCollections)).to.be.false
        expect(hasCollections(mockCollections)).to.be.true
        expect(mockCollections).to.be.an('array')
    })
})

