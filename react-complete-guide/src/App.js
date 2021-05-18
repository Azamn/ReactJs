// HTML inside javascript is JSX (Javascript XML)

import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () =>{
  const expenses = [
    {
      id: 1,
      title: "New Mobile",
      amount: 500,
      date: new Date(2021, 6, 18),
    },
    {
      id: 1,
      title: "Bike Insurance",
      amount: 164,
      date: new Date(2021, 5, 12),
    },
    {
      id: 1,
      title: "Groceries",
      amount: 364,
      date: new Date(2021, 7, 10),
    },
    {
      id: 1,
      title: "New Study Desk",
      amount: 200,
      date: new Date(2021, 4, 30),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
