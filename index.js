const server = require('./server')

const port = process.env.PORT || 500

server.listen(5000, () => {
    console.log(` Sever running on port ${port}`)
})