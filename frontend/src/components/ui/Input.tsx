import React from 'react'


type InputProps ={
 label:string,
 id:string,
 name:string,
 placeholder:string,
  className?: string,
  labelClassName?:string
 type?:string
 value?:string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label,className,value , onChange, type= "text",labelClassName,  id,name,placeholder}:InputProps) {
  return (
   <div className='flex flex-col gap-4'>
     <label className={labelClassName} htmlFor={id}>{label}</label>
     <input type={type} value={value} onChange={onChange} className={className} name={name} id={id} placeholder={placeholder}  />
   </div>
  )
}
