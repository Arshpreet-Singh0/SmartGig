import React from "react";

interface InputProps { 
    placeholder?: string; 
    reference?: any,
    type? : string,
    classname? : string,
    name? : string,
    value? : string | number,
    onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
    required? : boolean;
}

export function Input({placeholder, reference, type, classname, name, value, onChange, required}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} className={`px-4 py-2 border rounded + ${classname}`} required={required}></input>
    </div>
}