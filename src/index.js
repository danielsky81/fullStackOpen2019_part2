import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'
import Header from './components/Header'

// const Total = props => {
//   const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

//   return <p>yhteensä {total} tehtävää</p>
// }
  

// const Part = props =>
//   <p>{props.part.name} {props.part.exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  const rows = () => course.parts.map(part =>
    <Course key={part.id} part={part} />
    )

  return (
    <div>
        <Header course={course}/>
        {rows()}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)