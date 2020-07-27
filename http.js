const express=require('express')
const session = require('express-session')
const index = require('./router/index')
const login = require('./router/login')
const loginapi = require('./api/loginapi')
const releaseapi = require('./api/releaseapi')

const app = express()
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: 
}))

app.use(index)
app.use(login)
app.use(loginapi)
app.use(releaseapi)

app.use('/module/',express.static('./node_modules'))
 


app.listen(3000)

let msg=[]
app.engine('html',require('express-art-template'))
