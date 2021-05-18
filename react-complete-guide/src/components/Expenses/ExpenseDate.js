import React from "react";


import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const date = props.date.toLocaleString("en-GB", { day: "numeric" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__date">{date}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
