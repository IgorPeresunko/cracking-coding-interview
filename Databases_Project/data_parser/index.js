const api = require('./api')
const fs = require('fs')

const main = async () => {
	const matches = await api.getMatches()
	
	// do whatever you want with matches
	writeFile('matches.json', teams)
}

const writeFile = (name, data) => {
	fs.writeFile(`${__dirname}/data/${name}`, data, 'utf8', err => {
		if (err)
			console.error(err)
	})
}

main()