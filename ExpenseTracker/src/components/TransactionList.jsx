import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* //TODO replace this li with transaction component */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
