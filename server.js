const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3050

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'public/'))
app.set('view engine', 'pug', { pretty: true })

app.get('*', (req, res) => {
	res.render('index')
})


app.listen(PORT, () => {
	console.log(`Express Server listening on port ${PORT}`)
})

