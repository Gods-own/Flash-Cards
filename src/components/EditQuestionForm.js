import Button from './Button';
import { forwardRef } from 'react';

const EditQuestionForm = forwardRef((props, ref) => {
  const {ref1, ref2} = ref
  // const [question, setQuestion] = useState('')
  // const [answer, setAnswer] = useState('')
  const saveEdit = (e) => {
    e.preventDefault()
    console.log(ref1.current.value)
    if(!ref1.current.value || !ref2.current.value) {
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

    // let id = Math.floor(Math.random() * 10000);

    props.onEdit({id: props.flashCardId.id, question: ref1.current.value, answer: ref2.current.value})

    ref1.current.value = ''
    ref2.current.value = ''
  }
  const close = () => {
    props.onClose()
  }

  return (
    <div className='container'>
      <Button btnClick={close} btnText='X' />
      <form onSubmit={saveEdit}>
        <textarea ref={ref1}/>
        <textarea ref={ref2}/>
        <Button btnText='Save Edit'/>
      </form>
    </div>
  )
})

export default EditQuestionForm;
