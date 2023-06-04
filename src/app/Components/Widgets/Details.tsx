"use client"
import React, { createContext, useState } from 'react'


// {we will recive through from in transactionDetail and transactionAmount which will update another object i.e. transactions which we will import in transactionData to make a useConetxt}


let Id=1
export const transactions:any=[
  {   transaction_Id:Id,
      transaction_Detail:'grocery',
 transaction_amount:"1"
 },
]


function Details() {
    const [transactionDetail, setTransactionDetail] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
  
    const [transaction, setTrans] = useState(transactions);
  


    function handleSubmit(e:any) {
      e.preventDefault();
      setTrans([...transactions,
        {
          transaction_Id:Id++,
          transaction_Detail:transactionDetail,

          transaction_amount: transactionAmount
        }
      ]);
    }
  
    return (<div className='flex justify-center items-center font-serif font-bold'>
      
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="TransactionDetail">
          Enter Transaction
          <br />
          <input
            type="text"
            placeholder='Details...'
            value={transactionDetail}
            id="TransactionDetail"
            className='bg-yellow-100 my-2'
            onChange={(e) => setTransactionDetail(e.target.value)}
          />
        </label>
        <hr />
        <hr />
        <label htmlFor="TransactionAmount">
          Enter Amount
          <br />
          <input
            type="number"
            placeholder='Amount...'
className='bg-yellow-100'
            value={transactionAmount}
            id="TransactionAmount"
            onChange={(e) => setTransactionAmount(Number(e.target.value))}
          />
        </label>
        <br />
        <button type="submit" className='text-center bg-red-500 px-3 py-2 text-xl hover:bg-slate-500 rounded-lg mx-8 mt-3'>Submit</button>
      </form>
      </div>);
  }
  
  export default Details;



