import React, {useState, forwardRef} from 'react'

type InputType = {
  inputClasses?: string,
  name?: string, 
  placeholder?: string, 
  label?: string,
  ref?: any
  rest?: any
  erorr?: string
}

const Input = forwardRef((props: InputType, ref: any) => {
  const {inputClasses, name, placeholder, label, erorr, ...rest}: InputType = props

  const [inputValue, setInputValue] = useState<string>('')
  return (
    <div className='w-full h-auto mt-5'>
        <div className={`w-full h-auto p-2 pt-0 bg-slate-100 border-b-[2px] ${erorr ? 'border-[#ff481a]' : 'border-[#71c0f9]'} rounded-sm`}>
            <label  className='text-sm text-[#878686]' htmlFor={name}>{label}</label>
            <input {...rest} className={`w-full bg-slate-100 focus:outline-none mt-1 ${inputClasses}`} maxLength={50} type="text" name={name} placeholder={placeholder} onChange={(e) => setInputValue(e.target.value)} value={inputValue} ref={ref}/>
        </div>
        {/* <div className='w-full text-right'>{inputValue?.length ? inputValue?.length : 0} / 50</div> */}
        <div className='text-[#ff481a] text-sm pt-1'>{erorr}</div>
    </div>
  )
})

export default Input