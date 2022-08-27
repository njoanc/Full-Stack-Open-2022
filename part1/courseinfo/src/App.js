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
const Content=()=>{
  const part1={
    name:"Fundamentals of React",
    exercises:10
  }
  const part2={
    name:"Using props to pass data",
    exercises:7
  }
  const part3={
    name:"State of a component",
    exercises:14
  }
  return(
    <>
    <Header course={part1.name}/>
    <Part part1={part1.name} exercises1={part1.exercises}/>
    <Part part2={part2.name} exercises2={part2.exercises}/>
    <Part part3={part3.name} exercises3={part3.exercises}/>
    <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </>
  )

}


const App=()=>{
 
  return(
    <div>
      <Content/>
    </div>
  )
}

export default App;
