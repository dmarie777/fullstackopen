
const Header = (props) => {
  console.log(props);
  return (
      <h1>{props.course.name}</h1>
  )
}
const Part = ({part, exercise}) => {
  return (
    <p>
    Hello {part} {exercise}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div> 
      {parts.map(part => <Part key={part.id} part = {part.name} exercise = {part.exercise}/> )}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/> 
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>  
    </div>
  )
}

function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamental of React',
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
      }
    ]
  }

  return (
    <>
      <Course course = {course} />
    </>
  )
}

export default App
