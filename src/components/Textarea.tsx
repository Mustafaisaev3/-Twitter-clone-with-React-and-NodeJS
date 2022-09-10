import React, { useEffect, useState } from 'react'

const Textarea = (props: any) => {
  const {text, setText} = props
  // const [text, setText] = useState<string>('')
  
  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if(e.currentTarget){
        setText(e.currentTarget.value)
    }

    props.getTextareaLength(text.length)
  }

  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  useEffect(() =>{

    if (textareaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [textareaRef,text])

  return (
    <textarea ref={textareaRef} {...props} onChange={handleChangeTextarea} value={text} className='w-full scrollbar-hide resize-none outline-none'>
        
    </textarea>
  )
}

export default Textarea


