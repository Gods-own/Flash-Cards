import Button from './Button';
import Message from './Message';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const AddQuestionForm = (props) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [messageExists, setmessageExists] = useState(false)

  const save = (e) => {
    e.preventDefault()

    if(!question || !answer) {
      setmessageExists(true)
      setTimeout(() => {setmessageExists(false)}, 1500)
      return
    }

    let id = uuidv4();

    props.onSave({id, question, answer})

    setQuestion('')
    setAnswer('')
  }
  const close = () => {
    props.onClose()
  }

  return (
    <div className='formDiv'>
      <Button className="cancelbtn" btnClick={close}  btnText='X' />
      <div className='clearBoth'></div>
      {messageExists && <Message message="Please fill input fields"/>}
      <form onSubmit={save}>
        <div className='questionDiv'>
          <label htmlFor='question'>Question</label>
          <textarea id='question' value={question} onChange={(e) => setQuestion(e.target.value)} rows="5" style={{display: 'block', width: '95%'}}/>  
        </div>
        <div className='answerDiv'>
          <label htmlFor='answer'>Answer</label>
          <textarea id='answer' value={answer} onChange={(e) => setAnswer(e.target.value)} rows="5" style={{display: 'block', width: '95%'}}/>
        </div>
        <Button className="savebtn" btnText='Save'/>
      </form>
    </div>
  )
}

export default AddQuestionForm;
