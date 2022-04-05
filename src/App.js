import Header from './components/Header';
import Button from './components/Button';
import AddQuestionForm from './components/AddQuestionForm';
import EditQuestionForm from './components/EditQuestionForm';
import FlashCards from './components/FlashCards';
import { useState, useRef, useEffect } from 'react';


const App = () => {
  const [flashcards, setFlashCards] = useState([])

  const [toEdit, settoEdit] = useState({})
  const [isEdit, setisEdit] = useState(false)
  const [showQuestionForm, setshowQuestionForm] = useState(false)

  const questionRef = useRef()
  const answerRef = useRef()

  let form;

  const addFlashCard = (flashCard) => {

    const newFlashCard = flashCard

    setFlashCards([newFlashCard, ...flashcards,])
  }

  const getFlashCardItem = (id) => {
    setshowQuestionForm(true)
    setisEdit(true)
    let flashcardToEdit = flashcards.find((flashcard) => flashcard.id === id)
    settoEdit({...flashcardToEdit})
    setTimeout(() => {
      questionRef.current.value = flashcardToEdit.question
      answerRef.current.value = flashcardToEdit.answer
    }, 500)  
  }

  const deleteFlashCard = (id) => {
    setFlashCards(flashcards.filter((flashcard) => flashcard.id !== id))
  }

  const editFlashCard = (flashCard) => {
    let flashCardIndex = flashcards.findIndex((flashcard) => flashcard.id === flashCard.id)
    flashcards.splice(flashCardIndex, 1, flashCard)
    setFlashCards([...flashcards])
    setisEdit(false)
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

  useEffect(() => {
    if (localStorage.getItem('flashcards')) {
      try {
          let localflashcards = JSON.parse(localStorage.getItem('flashcards'));
          setFlashCards([...localflashcards])
      } catch (e) {
          localStorage.removeItem('flashcards');
      }
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards))
  }, [flashcards])

  return (
    <div className="App">
      <Header />
      <Button className="addQuestionBtn" btnClick={() => {setisEdit(false); setshowQuestionForm(true);}} btnText='Add Question' />
     {showQuestionForm && form}
      <FlashCards onDelete={deleteFlashCard} onEdit={getFlashCardItem} flashcards={flashcards}/>
    </div>
  );
}

export default App;
