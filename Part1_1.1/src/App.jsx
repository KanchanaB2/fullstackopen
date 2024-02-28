

// - Content component - 
const Content1 = (props) => {
  return(
    <>
      <p>
        {props.courseContects[0].part} {props.courseContects[0].exercises}
      </p>
      <p>
        {props.courseContects[1].part} {props.courseContects[1].exercises}
      </p>
      <p>
        {props.courseContects[2].part} {props.courseContects[2].exercises}
      </p>
    </>
  )
}

// - Content component - 
const Content = (props) => {
  return(
    <>
      <Part cData={props.courseContects} cid={0}/>
      <Part cData={props.courseContects} cid={1}/>
      <Part cData={props.courseContects} cid={2}/>
    </>
  )
}

// - Part component - 
const Part = (props) => {
  return (
    <>
      <p>
        {props.cData[props.cid].part} {props.cData[props.cid].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

// - Header component, Display title of the course - 
const Header = (props) =>{
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const CourseDetails = [
    {"id":1,"part":"Fundamentals of React", "exercises":100},
    {"id":2,"part":"Using props to pass data","exercises":70},
    {"id":3,"part":"State of a component","exercises":14}
  ]

  return (
    <div>
      <Header course={course} />
       <Content courseContects={CourseDetails}/>
      <Total total={CourseDetails[0].exercises+CourseDetails[1].exercises+CourseDetails[2].exercises}/>
    </div>
  )
}

export default App