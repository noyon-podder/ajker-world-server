import express, { Response, Request, Application, NextFunction } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'

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
app.use()
export default app
