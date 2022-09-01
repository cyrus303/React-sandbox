import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* //TODO replace this li with transaction component */}
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-${transaction.amount}</span>
            <button className="delete-btn">xxx</button>
          </li>
        ))}
      </ul>
    </>
  );
}
