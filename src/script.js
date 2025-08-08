const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")

const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balanceDisplay = document.getElementById("balance")

let income = []
let expenses = []

function updateBalance() {
  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0)
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0)
  const balance = totalIncome - totalExpenses
  balanceDisplay.textContent = balance + ""
}

function addTransaction(type) {
  const desc = descInput.value.trim()
  const amount = parseFloat(amountInput.value)

  if (desc === "" || isNaN(amount) || amount <= 0) {
    alert("Fyll i både redogörelse och ett belopp.")
    return
  }

  const transaction = { desc, amount }

  const li = document.createElement("li")
  li.textContent = `${desc}: ${type === "income" ? "+" : "-"}${amount} kr`

  const transLi = document.createElement("li")
  transLi.textContent = li.textContent

  if (type === "income") {
    income.push(transaction)
    incomeList.appendChild(li)
  } else {
    expenses.push(transaction)
    expenseList.appendChild(li)
  }

  transactionList.appendChild(transLi)

  updateBalance()


  descInput.value = ""
  amountInput.value = ""
}  


incomeBtn.addEventListener("click", () => addTransaction("income"))
expenseBtn.addEventListener("click", ()  => addTransaction("expense"))