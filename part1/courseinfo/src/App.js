const Header=(props)=>{
  return(
    <>
     <h1>{props.course}</h1>
    </>
  )
 
}
const Part=(props)=>{
  return(
    <>
    <p>{props.part1} {props.exercises1}</p>
    <p>{props.part2} {props.exercises2}</p>
    <p>{props.part3} {props.exercises3}</p>
    </>
  )
}
const Total=(props)=>{
  return(
    <>
    <p>Total: {props.total}</p>
    </>
  )
  }
// const Content=(props)=>{
  
//   return(
//     <>
//    <p>{props.course}</p>
//     </>
//   )

// }


const App=()=>{
  const course={
    name:"Half Stack application development",
    parts:[{
      name:"Fundamentals of React",
      exercises:10
    },
    {
      name:"Using props to pass data",
      exercises:7
    },
    {
      name:"State of a component",
      exercises:14
    }
    ]
  }
 
  return(
    <div>
      <Header course={course.name}/>
      <Part part1={course.parts[0].name} exercises1={course.parts[0].exercises}/>
      <Part part2={course.parts[1].name} exercises2={course.parts[1].exercises}/>
      <Part part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

export default App;