import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   return (
      <div>
         <h1>give feedback</h1>

         <Button text='good' click={() => setGood(good + 1)} />
         <Button text='neutral' click={() => setNeutral(neutral + 1)} />
         <Button text='bad' click={() => setBad(bad + 1)} />

         <h1>statistics</h1>

         <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
   )
}

const Statistics = (props) => {
   if (props.good + props.neutral + props.bad === 0) {
      return (<p>No feedback given</p>)
   }

   return (
      <table>
         <tbody>
            <Statistic name='good' value={props.good} />
            <Statistic name='neutral' value={props.neutral} />
            <Statistic name='bad' value={props.bad} />
            <Statistic name='all' value={props.good + props.neutral + props.bad} />
            <Statistic name='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
            <Statistic name='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'} />
         </tbody>
      </table>
   )
}

const Statistic = (props) => {
   return (
      <tr>
         <td>{props.name}</td>
         <td>{props.value}</td>
      </tr>
   )
}

const Button = (props) => (
   <button onClick={(props.click)}>
      {props.text}
   </button>
)

ReactDOM.render(<App />,
   document.getElementById('root')
)