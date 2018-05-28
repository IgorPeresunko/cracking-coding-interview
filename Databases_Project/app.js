import parse from './data_parser'
import { createConnection, createTables, fillTables } from  './mysql_scripts'
import startServer from './server'

const main = async () => {
	// const parsed_data = await parse()
	
	// const mysqlConnection = await createConnection()

	// await createTables(mysqlConnection)
	// await fillTables(mysqlConnection)

	// mysqlConnection.end()

	startServer()
}

main()