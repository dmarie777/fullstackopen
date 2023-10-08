const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.course.name}</h1>
    )
  }
  const Part = ({part, exercise}) => {
    return (
      <p>
      {part} {exercise}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div> 
        {parts.map(part => <Part key={part.id} part = {part.name} exercise = {part.exercises}/> )}
      </div>
    )
  }
  
const Total = ({parts}) => {
    const total = parts.reduce((a,b) => a + b.exercises,0 )
    return (
      <div>
        <p>Number of exercises {total}</p>  
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

  export default Course