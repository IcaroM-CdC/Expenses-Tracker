import express from "express";
import cors from "cors"

import { options } from "./allowedOrigins"

import { ErrorHandler } from "./middlewares/errorHandler";
import { AdminHandler } from "./middlewares/adminHandler";
import { AuthHandler } from "./middlewares/authHandler";
import { UserController } from "./controllers/userController";
import { ProfitController } from "./controllers/profitController";
import { ExpenseController } from "./controllers/expenseController";
import { AdminController } from "./controllers/adminController";

import "./database";
import "express-async-errors";

const APP = express()
const port = 3003

const userController = new UserController()
const profitController = new ProfitController()
const expenseController = new ExpenseController()
const adminController = new AdminController()

APP.use(express.json())
APP.use(cors(options))


/*
    ROTAS DOS USUÁRIOS 
*/

APP.post("/user/register", userController.register)
APP.post("/user/login", userController.login)
APP.post("/profit/insert", AuthHandler, profitController.insertProfit)
APP.post("/expense/insert", AuthHandler, expenseController.insertExpense)
APP.get("/profit/get-profits", AuthHandler, profitController.listProfits)
APP.get("/expense/get-expenses", AuthHandler, expenseController.listExpenses)
APP.delete("/profit/delete", AuthHandler, profitController.deleteProfit)
APP.delete("/expense/delete", AuthHandler, expenseController.deleteExpense)

/*
    ROTAS DOS USUÁRIOS COM PRIVILÉGIOS DE ADMINISTRADOR
*/

APP.get("/admin/get-users", AuthHandler, AdminHandler, adminController.listUsers)
APP.get("/admin/get-profits-metadata", AuthHandler, AdminHandler, adminController.listProfitsMetadata)
APP.get("/admin/get-expenses-metadata", AuthHandler, AdminHandler, adminController.listExpensesMetadata)

APP.use(ErrorHandler)

APP.listen(port, function(){

    console.log(`Servidor rodando no endereço http://localhost:${port}`)

})