import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import path from 'path'

import routes from './routes'

const app = express()

const connection = mysql.createConnection({
	host: "localhost",
	user: "igor",
	password: "",
	database: "dota",
})

connection.connect(err => {
	if (err) throw err
	console.log('MySQL connected.')
})

app.use((req, res, next) => {
	if (connection.state === 'authenticated') {
		req.mysql = connection
		next()
	} else {
		res.json('Connection not established yet')
	}
})

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json())

app.use(routes)

app.use('/', express.static(path.join(__dirname, '../web_client/build')))
app.use('/files', express.static(path.join(__dirname, './files')))

const startServer = () => {
	app.listen(3005, () => console.log('Server is running on port 3005'))
}

export default startServer