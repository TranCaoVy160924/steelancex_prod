import { useEffect } from "react";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
    id?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    type?: string;
    disabled?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: IconType;
}

const Input: React.FC<InputProps> = ({
    id = "",
    label,
    name,
    placeholder,
    value,
    type,
    icon: Icon,
    register,
    disabled,
    errors,
    onChange
}) => {
    const hasIcon = !!Icon; // Check if an icon is provided

    return (
        <div className="pb-5">
            {label && (
                <label htmlFor={id} className="block mb-1 text-left text-xl font-semibold">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                {hasIcon && (
                    <Icon
                        className="h-6 w-6 absolute left-3"
                    />
                )}
                <input
                    id={id}
                    type={type}
                    name={name}
                    // value={value}
                    defaultValue={value}
                    placeholder={placeholder}
                    {...(register && register(id))}
                    disabled={disabled}
                    // onChange={onChange}
                    className={`
                            ${hasIcon ? 'pl-14 pr-6 py-2 h-14' : 'pr-2 h-10 pl-4'} 
                            w-full 
                            rounded-15 
                            border-[1px] 
                            border-pink-cus-tx
                            hover:border-pink-cus-bt  
                            text-xl 
                            ${errors && errors[id] ? 'border-pink-cus-bt' : 'border-neutral-300'} 
                            ${errors && errors[id] ? 'focus:border-pink-cus-bt' : 'focus:border-black'}
                        `
                    }
                />
            </div>
            {errors && (
                <p className="text-red-600 font-semibold h-2">
                    {errors[id]?.message?.toString()}
                </p>
            )}
        </div>
    );
};

export default Input;
