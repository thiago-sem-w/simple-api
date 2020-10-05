'use strict'

require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.set('port', port)

app.use('*', async (req, res, next) => {
	res.status(404)
	next(new Error('endpoint not exist'))
})

app.use(async (err, req, res, next) => {
	const statusCode = res.statusCode || 500
	res
		.status(statusCode)
		.json({ error: err.message })
})

module.exports = app
