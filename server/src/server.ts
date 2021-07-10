import express from "express";
import { ErrorHandler } from "./middlewares/errorHandler"
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

APP.post("/register", userController.handle)
APP.post("/profit/insert", profitController.insertProfit)
APP.post("/expense/insert", expenseController.insertExpense)

APP.delete("/profit/delete", profitController.deleteProfit)
APP.delete("/expense/delete", expenseController.deleteExpense)



APP.use(ErrorHandler)

APP.listen(port,() => {

    console.log(`Servidor rodando no endereço http://localhost:${port}`)

})