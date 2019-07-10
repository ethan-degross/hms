import chai from 'chai'
import { expect } from 'chai'
import { endpoint } from '../src/config'
import * as F from '../src/index'
import { mockEmptyCollections, mockCollections, mockItems, mockEmptyItems } from './mock-data'
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
    it('getting site information', () => {
        return F.getSiteInfo(endpoint).then((data) => {                
            expect(data).to.have.all.keys('omeka_url', 'author', 'copyright', 'description', 'omeka_version', 'title')
        })       
    })
})

describe('Get Collections', () => {
    it('getting site collections', () => {
        return F.getCollections(endpoint).then((data) => {
            expect(data).to.be.an('array')
        })
    })
    it('determined if there are items or not', () => {
        expect(F.hasCollections(mockEmptyCollections)).to.be.false
        expect(F.hasCollections(mockCollections)).to.be.true
        expect(mockCollections).to.be.an('array')
    })
    it('gets metadata for a collection', () => {
        return F.getCollectionMetadataById(endpoint, 7).then((data) => {
            expect(data).to.be.an('object')
        })
    })  
})

describe('Get Items', () => {
    it('getting site items', () => {
        return F.getItems(endpoint).then((data) => {
            expect(data).to.be.an('array')
        })
    })
    it('determined if there are items or not', () => {
        expect(F.hasItems(mockEmptyItems)).to.be.false
        expect(F.hasItems(mockItems)).to.be.true
        expect(mockItems).to.be.an('array')
    })
    it('gets items for collection', () => {
        return F.getItemsInCollection(endpoint, 7).then((data) => {
            expect(data).to.be.an('array')
        }) 
    })
})

