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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <>
    <Header course={part1}/>
    <Part part1={part1} exercises1={exercises1}/>
    <Part part2={part2} exercises2={exercises2}/>
    <Part part3={part3} exercises3={exercises3}/>
    <Total total={exercises1+exercises2+exercises3}/>
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
