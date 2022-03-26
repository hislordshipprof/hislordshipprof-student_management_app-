import React,{useState} from 'react'
import './FormInput.scss'
const FormInput = (props) => {
    const {label,errorMessage,onChange,id,...inputProps}=props;
    const[focused,setFocused]=useState(false);

    const handleFocus=(e)=>{
      setFocused(true)
    }
  return (
    <div className="forminput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      
     {/* <select>
       <option>hello</option>
     </select> */}
     
     
    
      {/* <select
        {...selectProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      /> */}


      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput