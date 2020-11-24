import { AUTH_HAS_ONE_PROVIDER } from '@shared/config'
import { Router } from 'express'

import google from './google'
// import github from './github'
// import facebook from './facebook'
// import twitter from './twitter'
// import apple from './apple'
// import windowslive from './windowslive'
// import linkedin from './linkedin'

const initRoutes = (): Router | undefined => {

  console.log("providers", AUTH_HAS_ONE_PROVIDER)
  if (AUTH_HAS_ONE_PROVIDER) {
    // Create the middleware only if at least one provider is enabled
    const router = Router()
    google(router)
    // github(router)
    // facebook(router)
    // twitter(router)
    // apple(router)
    // windowslive(router)
    // linkedin(router)
    return router
  }
}

export default initRoutes()
