import Header from './components/Header';
import Button from './components/Button';
import AddQuestionForm from './components/AddQuestionForm';
import EditQuestionForm from './components/EditQuestionForm';
import FlashCards from './components/FlashCards';
import { useState, useRef } from 'react';


const App = () => {
  const [flashcards, setFlashCards] = useState([
    {
      id: 1,
      question: "Who are you?",
      answer: "I am me"
    },
    {
      id: 2,
      question: "Who is the resident of Nigeria?",
      answer: "President Buhari"
    },
    {
      id: 3,
      question: "How many states do we have in Nigeria",
      answer: "We have 36 states"
    }
  ])

  // const [flashcardToEdit, setflashcardToEdit] = useState({})

  const [toEdit, settoEdit] = useState({})
  const [isEdit, setisEdit] = useState(false)
  const [showQuestionForm, setshowQuestionForm] = useState(false)

  const questionRef = useRef()
  const answerRef = useRef()

  let form;

  const addFlashCard = (flashCard) => {

    const newFlashCard = flashCard

    setFlashCards([...flashcards, newFlashCard])
  }

  const getFlashCardItem = (id) => {
    console.log(id)
    setshowQuestionForm(true)
    setisEdit(true)
    let flashcardToEdit = flashcards.find((flashcard) => flashcard.id === id)
    console.log(flashcardToEdit)
    settoEdit({...flashcardToEdit})
    // console.log(flashcardToEdit)
    setTimeout(() => {
      questionRef.current.value = flashcardToEdit.question
      answerRef.current.value = flashcardToEdit.answer
    }, 500)  
  }

  // useEffect(() => {
  //   questionRef.current = flashcardToEdit.question
  //   answerRef.current = flashcardToEdit.answer
  // }, [flashcardToEdit])

  const deleteFlashCard = (id) => {
    setFlashCards(flashcards.filter((flashcard) => flashcard.id !== id))
  }

  const editFlashCard = (flashCard) => {
    let flashCardIndex = flashcards.findIndex((flashcard) => flashcard.id === flashCard.id)
    flashcards.splice(flashCardIndex, 1, flashCard)
    setFlashCards([...flashcards])
    console.log(flashcards)
  }

  const closeForm = () => {
    setshowQuestionForm(false)
  }

  if (!isEdit) {
    form = <AddQuestionForm onClose={closeForm} onSave={addFlashCard}/>
  }
  else if (isEdit) {
    form = <EditQuestionForm onClose={closeForm} flashCardId={toEdit} ref={{ref1: questionRef, ref2: answerRef}} onEdit={editFlashCard}/>
  }

  return (
    <div className="App">
      <Header />
      <Button btnClick={() => {setisEdit(false); setshowQuestionForm(true);}} btnText='Add Question' />
     {showQuestionForm && form}
      <FlashCards onDelete={deleteFlashCard} onEdit={getFlashCardItem} flashcards={flashcards}/>
    </div>
  );
}

export default App;
