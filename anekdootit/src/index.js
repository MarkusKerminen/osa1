import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
   const [selected, setSelected] = useState(0)

   return (
      <div>
         <h1>Anecdote of the day</h1>
         {props.anecdotes[selected]} <br />
         <p>has {votes[selected]} votes</p>
         <button onClick={() => {
            votes[selected] += 1
            refresh()
         }}>vote</button>
         <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
         <h1>Anecdote with most votes</h1>
         {getMostVoted()}
      </div>
   )
}

const refresh = () => {
   ReactDOM.render(
      <App anecdotes={anecdotes} />,
      document.getElementById('root')
   )
}

const getMostVoted = () => {
   let indexOfMostVoted = 0;
   let mostVotes = 0;
   for(let i = 0; i < anecdotes.length; i++){
      if(votes[i] > mostVotes){
         indexOfMostVoted = i;
         mostVotes = votes[i]
      }
   }

   return (
      <div>
         {anecdotes[indexOfMostVoted]} <br/>
         has {mostVotes} votes
      </div>
   )
}

const votes = [
   0,
   0,
   0,
   0,
   0,
   0,
]

const anecdotes = [
   'If it hurts, do it more often',
   'Adding manpower to a late software project makes it later!',
   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
   'Premature optimization is the root of all evil.',
   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
   <App anecdotes={anecdotes} />,
   document.getElementById('root')
)