import Button from './Button';
import { useState } from 'react';

const AddQuestionForm = (props) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const save = (e) => {
    e.preventDefault()
    if(!question || !answer) {
      alert('please input text')
    }

    // let id;
    // let uniqueId;
    // let index;

    // do {
    //     uniqueId = Math.floor(Math.random() * 10000)
    //     index = this.groceryItems.findIndex((groceryItem) => {
    //     return groceryItem.id === uniqueId
    //     })
    // } 
    // while(index !== -1)

    // id = uniqueId

    // newGrocery = {
    //     id: id,
    //     text: this.text
    // }

    let id = Math.floor(Math.random() * 10000);

    props.onSave({id, question, answer})

    setQuestion('')
    setAnswer('')
  }
  const close = () => {
    props.onClose()
  }

  return (
    <div className='container'>
      <Button btnClick={close}  btnText='X' />
      <form onSubmit={save}>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)}/>
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)}/>
        <Button btnText='Save'/>
      </form>
    </div>
  )
}

export default AddQuestionForm;
