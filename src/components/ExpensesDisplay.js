import ExpenseItem from './ExpenseItem'
import React, { useState } from 'react';
import './ExpensesDisplay.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function ExpensesDisplay(props){
  const[filtered_year,setFilteredYear] = useState('2020')
  const ExpenseHandlerFilterYear = (chosenYear) => {
    setFilteredYear(chosenYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtered_year;
  });
  return(
    <div>
      <Card className="expenses_display">
        <ExpensesFilter selected={filtered_year} onChangeFilterYear={ExpenseHandlerFilterYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default ExpensesDisplay
