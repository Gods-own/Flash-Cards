import FlashCard from "./FlashCard"

const FlashCards = (props) => {
  return (
    <div className="flashcardsDiv">
      {props.flashcards.map((flashcard) => {
        return <FlashCard onEdit={props.onEdit} onDelete={props.onDelete} key={flashcard.id} flashcard={flashcard}/>
      } )}
    </div>
  )
}

export default FlashCards;
