import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.getFullYear()

  return (
    <div className="expense-item"> 
      <div className="expense-item__date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title.toUpperCase()}</h2>
        <span className="expense-item__price">${props.price}</span>
      </div>
    </div>
  )
}

export default ExpenseItem
