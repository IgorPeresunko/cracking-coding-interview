import { createConnection as _createConnection } from 'mysql'
import { readFileSync, readdirSync } from 'fs'


export const createConnection = () =>
	new Promise((resolve, reject) => {
		const con = _createConnection({
			host: "localhost",
			user: "igor",
			password: "",
			database: "dota",
			insecureAuth: true,
			multipleStatements: true
		})

		con.connect(err => {
			if (err) {
				console.log('Error with connecting to mysql')
				return reject(err)
			}

			console.log('We are connected to mysql db')

			resolve(con)
		})
	})

export const createTables = connection =>
	new Promise((resolve, reject) => {
		const schema = readFileSync(`${__dirname}/schema.sql`, 'utf-8').replace(/[\r|\n|\t]/g, "")

		connection.query(schema, (err, result) => {
			if (err) {
				console.log(`Error with schema init`, err)
				return reject(err)
			}

			console.log(`Successfuly created tables`)

			resolve()
		})
	})

export const fillTables = connection =>
	new Promise((resolve, reject) => {

		const files = readdirSync(__dirname)

		const data = files
			.filter(name => name.includes('.sql') && name !== 'schema.sql')
			.sort()
			.map(name => readFileSync(`${__dirname}/${name}`, 'utf-8'))
			.join('')

		console.log('Started pushing data. It might take a while.')

		connection.query(data, (err, result) => {
			if (err) {
				console.log(`Error when filling tables with data`, err)
				return reject(err)
			}

			console.log(`Successfuly stored data!`)

			resolve()
		})
	})