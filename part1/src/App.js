const Hello=(props)=>{
// const now= new Date()
const a=10
const b=20
return(
  <div>
  <p>Hello {props.name},</p>
  <p>{a} plus {b} is {a+b}</p>
</div>
)
}

const App=()=>{
  const data="Jeanne d'Arc"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={data}/>
    </div>
  )
}
 
export default App;
