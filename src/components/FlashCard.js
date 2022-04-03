import Button from "./Button"
import { useState } from 'react';
const Flashcard = (props) => {

  const [showAnswer, setshowAnswer] = useState(false)

//   const deleteItem = (e) => {
//       console.log('kk')
//       props.onDelete(props.flashcard.id)
//   }  
  return (
    <div className="container">
      <h4>{props.flashcard.question}</h4>
      <Button btnClick={() => {setshowAnswer(!showAnswer)}} btnText='Hide Answer' />
      {showAnswer && <p>{props.flashcard.answer}</p>}
      <Button btnClick={() => props.onEdit(props.flashcard.id)} btnText='Edit' />
      <Button btnClick={() => props.onDelete(props.flashcard.id)} btnText='Delete' />
    </div>
  )
}

export default Flashcard
