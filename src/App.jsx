import Button from "../Components/Button"
import Header from "../Components/Header"
import List from "../Components/List"
import Person from "../Components/Person"
function App() {
 
  return (
   <>
   {/* Question 01 */}
   <Person name="Prakash" age="19"/>
   {/* Question 02 */}
   <Button text="Click me" onClick = {()=>{prompt("Enter your name below.")}}/>
   {/* Question 03 */}
   <Header title="Pw Skills"/>
   {/* Question 04 */}
   <List 
   items={
   <div>
    <li>Mouse</li>
    <li>Screen Guard</li>
    <li>Pen</li>
    <li>Notebook</li>
   </div>
  }/>
   </>
  )
}

export default App
