import express, { Response, Request, Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/error/globalErrorHandler'
import notFoundRoute from './app/error/notFound'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// router
app.use('/api/v1/users', UserRoutes)

// check routing
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello Developer!!',
  })
})

// global error handler
app.use(globalErrorHandler)

// not found route
app.use(notFoundRoute)

export default app
