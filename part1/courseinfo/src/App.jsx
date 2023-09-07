
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
      <Part part = {parts[0].name} exercise = {parts[0].exercises}/>
      <Part part = {parts[1].name} exercise = {parts[1].exercises}/>
      <Part part = {parts[2].name} exercise = {parts[2].exercises}/>
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
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamental of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
        <Header course = {course} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts}/> 
      </div>
    </>
  )
}

export default App
