import { useState } from 'react'
import './App.css'

function App() {

  // 1. Pass in a new color of your choosing in place of the old one. 
  //   Hint: we don’t care what the previous color was.

  const [color, setColor] = useState("pink")
  
  const changeColor = () => {
    setColor("blue");
  };
  
  
  console.log(color)



  // 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.

  const [toggleColor, setToggleColor] = useState("pink")

  const toggleColorHandler = () => {
    setToggleColor(prevColor => (prevColor === "pink" ? "blue" : "pink"));
  };

  console.log(toggleColor)


  // 3. Add a new person object to the people array in state. You can hard-code a new object, but it must be a person object with firstName and lastName properties. The final array should contain two person objects.

  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])

  // Your code here

  console.log(people)



  //4. Update the following state so the value is multiplied by 2.

  const [number, setNumber] = useState(4)

  // Your code here

  console.log(number)




  // 4. Add an age property to the existing person state object and set its value to 30, ensuring that the other properties are not overwritten.

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
  })

  // Your code here

  console.log(person)




  //5. Fix the following state update so that it correctly adds a new color to the colors array.

  const [colors, setColors] = useState(["pink", "blue"])

  setColors("green") // Fix this state update

  console.log(colors)
  
  return (
    <>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={toggleColorHandler}>Toggle Color</button>
    </>
  )
}

export default App
