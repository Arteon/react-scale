import authRoute from './auth'
import {Router} from 'express'
import {mapValues} from 'lodash'

let expressRouter = Router()

const mapExpressRouterToRoute = (route) => {
    return route(expressRouter)
}

export default mapValues({authRoute}, mapExpressRouterToRoute)
