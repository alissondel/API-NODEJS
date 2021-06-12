  
const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/* 
'use strict' //Força o js ser criterioso nas variavel 
  
const app = require('../src/app');
const http = require('http')
const debug = require('debug') ('nodestr:server')
const express = require('express')

const app = express()
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port)

const server = http.createServer(app);
const router = express.Router()

const route = router.get('/', (req, res, next) => {
    res.status(200).send({ //res.status(200).send  - quer dizer que a porta está ok
        title: "NodeJS API",
        version: "0.0.1"
    })
})

app.use('/', route);

server.listen(port); //server.listen(port) - mostrar pro servidor que está ouvindo ess porta 
server.on('error', onError); //Função pra mostrar o erro
server.on('listening', onListening);

console.log('API executando na porta ' + port)

function normalizePort(val) {
 //Função para detectar se a porta está ocupada

    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
}

function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch (error.code){
        case ' EACCES': // Printa na tela, gera um erro
            console.error(bind + 'requires elevated privileges'); 
            process.exit(1);
            break;
        case 'EADDRINUSE': // Erro de endereço em uso
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('Listening on' + bind)
}
*/