import express from "express";
import { ErrorHandler } from "./middlewares/errorHandler"
import { AuthHandler } from "./middlewares/authHandler"
import { AdminHandler } from "./middlewares/adminHandler"

import { UserController } from "./controllers/userController";
import { ProfitController } from "./controllers/profitController";
import { ExpenseController} from "./controllers/expenseController"

import "./database"
import "express-async-errors"

const APP = express()
const port = 3003

const userController = new UserController()
const profitController = new ProfitController()
const expenseController = new ExpenseController()

APP.use(express.json())

APP.post("/user/register", userController.register)
APP.post("/user/login", userController.login)

APP.post("/profit/insert", AuthHandler, profitController.insertProfit)
APP.post("/expense/insert", AuthHandler, expenseController.insertExpense)

APP.delete("/profit/delete", AuthHandler, profitController.deleteProfit)
APP.delete("/expense/delete", AuthHandler, expenseController.deleteExpense)

APP.get("/profit/get-profits", AuthHandler, profitController.listProfits)
APP.get("/expense/get-expenses", AuthHandler, expenseController.listExpenses)
APP.get("/user/get-users", AuthHandler, AdminHandler, userController.listUsers)

APP.use(ErrorHandler)

APP.listen(port, function(){

    console.log(`Servidor rodando no endereço http://localhost:${port}`)

})