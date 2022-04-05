import Button from "./Button"
import { useState } from 'react';
const Flashcard = (props) => {

  const [showAnswer, setshowAnswer] = useState(false)
 
  return (
    <article className="flashcardItems">
      <h4>{props.flashcard.question}</h4>
      <Button className="toggle-btn" btnClick={() => {setshowAnswer(!showAnswer)}} btnText={showAnswer ? 'Hide Answer' : 'Show Answer'} />
      {showAnswer && <p>{props.flashcard.answer}</p>}
      <div className="action-buttons-div">
      <Button className="editBtn" btnClick={() => props.onEdit(props.flashcard.id)} btnText='Edit' />
      <Button className="deleteBtn" btnClick={() => props.onDelete(props.flashcard.id)} btnText='Delete' />
      </div>
    </article>
  )
}

export default Flashcard
