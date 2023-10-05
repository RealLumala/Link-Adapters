const createRegisterRequest = require('./endpoints/register').createRequest
const createReleaseRequest = require('./endpoints/release').createRequest
const createClaimRequest = require('./endpoints/claim').createRequest
const createGraphqlRequest = require('./endpoints/graphql').createRequest

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.EA_PORT || 8080

app.use(bodyParser.json())

app.post('/register', (req, res) => {
  console.log('POST Data: ', req.body)
  createRegisterRequest(req.body, (status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post('/release', (req, res) => {
  console.log('POST Data: ', req.body)
  createReleaseRequest(req.body, (status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post('/claim', (req, res) => {
  console.log('POST Data: ', req.body)
  createClaimRequest(req.body, (status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.post('/graphql', (req, res) => {
  console.log('POST Data: ', req.body)
  createGraphqlRequest(req.body, (status, result) => {
    console.log('Result: ', result)
    res.status(status).json(result)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
