import express from 'express'

import defaultServerController from '../controllers/defaultServerController'

const router = express.Router()

router.get('/', defaultServerController)

export default router
