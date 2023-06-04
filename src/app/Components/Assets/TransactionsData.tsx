"use client"

import React, { createContext } from 'react'


import transactions from "../Widgets/Details"

// console.log(transaction)


// const transactions:any=[
//     {   transaction_Id:1,
//         transaction_Detail:'grocery',
//    transaction_amount:"1"
//    },
//     {   transaction_Id:2,
//         transaction_Detail:'clothes',
//    transaction_amount:"-6"
//    },
//     {   transaction_Id:3,
//         transaction_Detail:'ahmed',
//    transaction_amount:"-6"
//    },
//     {   transaction_Id:3,
//         transaction_Detail:'ahmed',
//    transaction_amount:"-6"
//    },
// ]
;


   export const transactionContext=createContext(transactions)
   
   function TransactionsData
   
   
   ({children}:any) {

  return (
    <transactionContext.Provider value={transactions}>

    <div>{children}</div>
    </transactionContext.Provider>
  )
}



export default TransactionsData