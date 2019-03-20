'use strict'

const http = require('http')
const longModule = require('long')
const build = require('.')

const server = http.createServer(handle)

function handle (req, res) {
  const schema = {
    properties: {
      data: {
        type: 'integer'
      }
    }
  }
  const stringify = build(schema)
  const data = stringify({
    data: longModule.fromString('18446744073709551615', true)
  })
  if (req.url === '/JSON') {
    res.end(JSON.stringify(data))
  } else {
    res.end(stringify(data))
  }
}

server.listen(3000)
