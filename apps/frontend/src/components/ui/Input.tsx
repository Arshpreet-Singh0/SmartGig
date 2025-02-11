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
    disabled? : boolean;
    id? : string;
}

export function Input({placeholder, reference, type, classname, name, value, onChange, required, disabled, id}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} name={name} type={type} value={value} id={id} onChange={onChange} className={`px-4 py-2 border rounded + ${classname}`} required={required} disabled={disabled}></input>
    </div>
}