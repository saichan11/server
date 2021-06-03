const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/json' })
    fs.readFile('api_list.json', function(error, date) {
        if (error) {
            res.writeHead(500)
            res.write(data)
        } else {
            res.write(data)

        }
        res.end()
    })
})

server.listen(port, function(req, res) {
    if (error) {
        console.log('failed', error)
    } else {
        console.log('success' + port)
    }
})