import express from 'express'
import proxy from 'express-http-proxy'
const app = express()
app.use('/', proxy(`http://poc-tlip-api.eu-central-1.elasticbeanstalk.com`))
export default app