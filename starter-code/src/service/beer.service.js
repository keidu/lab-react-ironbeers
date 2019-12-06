import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this._service.get('/')
    getOneBeer = id => this._service.get(`/${id}`)
    getRandom = () => this._service.get('random')
    postBeer = beer => this._service.get('/new', beer)

}