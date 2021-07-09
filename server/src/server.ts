import express from "express";
import { ErrorHandler } from "./middlewares/errorHandler"
import { UserController } from "./controllers/userController";
import { ProfitController } from "./controllers/profitController";
import { ExpenseController} from "./controllers/expenseController"
import "./database"
import "express-async-errors"


const APP = express()
const PORT = 3003

const userController = new UserController()
const profitController = new ProfitController()
const expenseController = new ExpenseController()

APP.use(express.json())

APP.post("/register", userController.handle)
APP.post("/profit/new", profitController.newLoan)
APP.post("/expense/new", expenseController.newExpense)

APP.use(ErrorHandler)

APP.listen(PORT,() => {

    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)

})