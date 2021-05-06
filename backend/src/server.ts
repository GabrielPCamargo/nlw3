import express from 'express' //facilita requisição e resposta
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import routes from './routes'
import errorHandler from './errors/handler'

import './database/connection'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

///Rota: Todo o get
//Recurso: Usuário
//Métodos HTTP = GET(busca), POST(Criando informação), PUT(Editar), DELETE
//Parâmetros ou requests

//Query params: /users?search=gabriel
//Route params: /users/1 (Identificar um recurso)
//Body /users (Formuçários)

//Navegador faz só requisição GET

//Migrations facilita o uso de criação de tabelas




app.listen(3333)


//Tipos de banco de dados: Driver nativo, Query builder, ORM (usaremos esse)