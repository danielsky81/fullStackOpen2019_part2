import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'
import Header from './components/Header'
import Total from './components/Total'

const App = () => {
  const course = [
      {
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
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
            name: 'Routing',
            exercises: 3,
            id: 1
            },
            {
            name: 'Middlewares',
            exercises: 7,
            id: 2
            }
        ]
    }
  ]

const rows = type => course[type].parts.map(part =>
    <Course key={part.id} part={part} />
    )

const total = type => course[type].parts.reduce((a, b) => (a + b.exercises), 0)

  return (
    <div>
        <Header course={course[0].name} />
        {rows(0)}
        <Total total={total(0)} />
        <Header course={course[1].name} />
        {rows(1)}
        <Total total={total(1)} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)