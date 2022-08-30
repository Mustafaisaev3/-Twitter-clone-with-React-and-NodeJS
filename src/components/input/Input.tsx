import React, {useState} from 'react'

type InputType = {
  inputClasses?: string,
  name?: string, 
  placeholder?: string, 
  label?: string
}

const Input = ({inputClasses, name, placeholder, label}: InputType) => {

  const [inputValue, setInputValue] = useState<string>()
  console.log(inputValue)
  return (
    <div className='w-full h-auto mt-5'>
        <div className='w-full h-auto p-2 pt-0 bg-slate-100 border-b-[2px] border-[#71c0f9] rounded-sm'>
            <label className='text-sm text-[#878686]' htmlFor={name}>{label}</label>
            <input className={`w-full bg-slate-100 focus:outline-none mt-1 ${inputClasses}`} maxLength={50} type="text" name={name} placeholder={placeholder} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        </div>
        <div className='w-full text-right'>{inputValue?.length ? inputValue?.length : 0} / 50</div>
    </div>
  )
}

export default Input