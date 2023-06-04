"use client";

import React, { useContext } from "react";
import { transactionContext } from "../Assets/TransactionsData";

function Income() {
  const transaction = useContext(transactionContext);

  // Income
  const filterIncome = transaction.filter((e: any) => {return e.transaction_amount > 0});

  const income = filterIncome.reduce((total: number, transaction: any) => {
    return total + Number(transaction.transaction_amount);
  }, 0);

  console.log(income);

  // Expense

  const filterExpense = transaction.filter((num: any) => {
    return num.transaction_amount < 0;
  });
  const expense = filterExpense.reduce((total: number, transaction: any) => {
    return total + Number(transaction.transaction_amount);
  }, 0);

  
console.log(expense)

  return (
    <div>
      <div className="flex space-x-2 justify-around  gap-x-6 mx-auto font-bold border-2 mt-7 font-serif shadow-inner shadow-blue-500 bg-white border-slate-600 text-3xl">
        {/* left side */}
        <div className="flex-col items-center p-2 space-y-5">
          <div>
            <h3>Income</h3>
          </div>
          <div>
            <h2 className="text-green-500">{income}$</h2>
          </div>
        </div>

        <div className="border-2 border-slate-500 h-22"></div>
        {/* Right side */}
        <div className="flex-col items-center p-2 space-y-5">
          <div>
            <h3>Expense</h3>
          </div>
          <div>
            <h2 className="text-red-600">{expense}$</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
