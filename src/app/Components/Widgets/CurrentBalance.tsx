"use client"
import React, { useContext } from 'react'
import {transactionContext } from '../Assets/TransactionsData'



function CurrentBalance() {
  
  const transactions = useContext(transactionContext);
  const balance=transactions.reduce((total:number,transaction:any)=>{
    return total+Number(transaction.transaction_amount)},0
  )
  return (
    <div><div className='flex-col p-3 text-3xl border-2 mt-2 border-red-600 text-center font-mono font-bold'>
  
    <div><h2>Current Balance</h2></div>
    <div><h3 className='text-4xl hover:to-blue-600 hover:scale-110 text-blue-950 duration-500'>{balance}$</h3></div>
    </div></div>
  )
}

export default CurrentBalance