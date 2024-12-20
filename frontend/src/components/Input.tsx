import React from "react";

interface InputProps { 
    placeholder?: string; 
    reference?: any,
    type? : string,
    classname? : string,
    name? : string,
    value? : string,
    onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({placeholder, reference, type, classname, name, value, onChange}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} className={`px-4 py-2 border rounded m-2 + ${classname}`} ></input>
    </div>
}