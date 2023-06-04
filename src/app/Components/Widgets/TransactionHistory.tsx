"use client";
import React, { FC, useContext } from "react";
import { transactionContext } from "../Assets/TransactionsData";

function TransactionHistory() {
  const transaction = useContext(transactionContext);

  return (
    <>
      <div className="flex justify-around mt-10">
        <div className="flex-col">
          <div>
            <h3 className="text-xl bg-pink-300 rounded-full px-10 py-2 font-semibold tracking-wider">
              {" "}
              Transaction History
            </h3>{" "}
          </div>
          <div className="border mt-2 border-slate-500 "></div>
          <div className="flex-col justify-between">
            {transaction.map((num: any) => {
              return (
                <History
                  key={num.transaction_Id}
                  a={num.transaction_Detail}
                  b={num.transaction_amount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
interface HistoryProps {
  a: string;
  b: string;
}

export const History: FC<HistoryProps> = ({ a, b }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-start text-lg font-bold">{a}</div>
        <div className="flex justify-end text-lg font-bold">{b}</div>
      </div>
    </>
  );
};

export default TransactionHistory;
