import Button from './Button';
import Message from './Message';
import { forwardRef, useState } from 'react';

const EditQuestionForm = forwardRef((props, ref) => {
  const {ref1, ref2} = ref

  const [messageExists, setmessageExists] = useState(false)

  const saveEdit = (e) => {
    e.preventDefault()
    if(!ref1.current.value || !ref2.current.value) {
      setmessageExists(true)
      setTimeout(() => {setmessageExists(false)}, 1500)
      return
    }

    props.onEdit({id: props.flashCardId.id, question: ref1.current.value, answer: ref2.current.value})

    ref1.current.value = ''
    ref2.current.value = ''
  }
  const close = () => {
    props.onClose()
  }

  return (
    <div className='formDiv'>
      <Button className="cancelbtn" btnClick={close} btnText='X' />
      <div className='clearBoth'></div>
      {messageExists && <Message message="Please fill input fields"/>}
      <form onSubmit={saveEdit}>
        <div className='questionDiv'>
          <label htmlFor='question'>Question</label>
          <textarea id='question' ref={ref1} rows="5" style={{display: 'block', width: '95%'}}/>
        </div> 
        <div className='answerDiv'>
          <label htmlFor='answer'>Answer</label> 
          <textarea id='answer' ref={ref2} rows="5" style={{display: 'block', width: '95%'}}/>
        </div>  
        <Button className="saveEditbtn" btnText='Save Edit'/>
      </form>
    </div>
  )
})

export default EditQuestionForm;
