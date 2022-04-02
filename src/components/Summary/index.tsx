import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
<<<<<<< HEAD
import { useTransactions } from "../../hooks/useTransactions";
=======
import { TransactionsContext } from "../../TransactionsContext";
>>>>>>> 9a6ebfea7e43da309ad623b6bf546c4f72acc29e

import { Container } from "./styles";

export function Summary() {
<<<<<<< HEAD
  const { transactions } = useTransactions();

  // const total = transactions.reduce((acc, transaction) => {
  //   if (transaction.type == "deposit") {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
=======
  const transactions = useContext(TransactionsContext);

  console.log(transactions);
>>>>>>> 9a6ebfea7e43da309ad623b6bf546c4f72acc29e

  return (
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Spending</p>
          <img src={outcomeImg} alt="Spending" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
