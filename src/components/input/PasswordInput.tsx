import React, {useState, forwardRef} from 'react'

// Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

type PasswordInputType = {
  inputClasses?: string,
  name?: string, 
  placeholder?: string, 
  label?: string,
  ref?: any
  rest?: any
  erorr?: string
}

const PasswordInput = forwardRef((props: PasswordInputType, ref: any) => {
  const {inputClasses, name, placeholder, label, erorr, ...rest}: PasswordInputType = props
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState<string>('')
  return (
    <div className='w-full h-auto mt-5'>
        <div className={`w-full h-auto p-2 pt-0 bg-slate-100 border-b-[2px] ${erorr ? 'border-[#ff481a]' : 'border-[#71c0f9]'} rounded-sm`}>
            <label  className='text-sm text-[#878686]' htmlFor={name}>{label}</label>
            <div className='flex'>
                <input {...rest} className={`w-full bg-slate-100 focus:outline-none mt-1 ${inputClasses}`} maxLength={50} type={`${showPassword ? 'text' : 'password'}`} name={name} placeholder={placeholder} onChange={(e) => setInputValue(e.target.value)} value={inputValue} ref={ref}/>
                <div onClick={() => setShowPassword(prev => !prev)}>
                    {
                        showPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />
                    }
                </div>
            </div>
        </div>
        
        {/* <div className='w-full text-right'>{inputValue?.length ? inputValue?.length : 0} / 50</div> */}
        <div className='text-[#ff481a] text-sm pt-1'>{erorr}</div>
    </div>
  )
})

export default PasswordInput