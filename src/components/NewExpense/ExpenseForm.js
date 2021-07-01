import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [showScreen, setShowScreen] = useState(0)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate + 'T00:00:00')
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredDate('');
      setEnteredAmount('');
    };
    const firstAddHandler = () => {
      setShowScreen(1)
    }
    const cancelHandler = () => {
      setShowScreen(0)
    }
    if(showScreen===0){
      return <button onClick={firstAddHandler}>Add New Expense</button>
    }
  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
