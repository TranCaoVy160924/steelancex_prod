import { ChangeEvent, ChangeEventHandler } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface JobDateInputProps {
   label?: string;
   name: string;
   value?: string;
   min?: string;
   onChange?: (value: string) => void;
   register?: UseFormRegister<FieldValues>;
   errors?: FieldErrors;
}

const JobDateInput: React.FC<JobDateInputProps> = ({
   label,
   name,
   value,
   min,
   onChange,
   register,
   errors
}) => {
   // const handleInputChange = (e: any) => {
   //    console.log(e)
   //    onChange(e.target.value);
   // };

   return (
      <>
         {label && <label>{label}</label>}
         <input
            type='date'
            name={name}
            value={value}
            {...(register && register(name))}
            // onChange={handleInputChange}
            min={min}
            className="
            w-full 
            border-[1px] 
            border-pink-cus-tx 
            rounded-[5px]
          "
            placeholder="..."
         />
         {errors && (
            <p className="text-red-600 font-semibold h-2">
               {errors[name]?.message?.toString()}
            </p>
         )}
      </>
   );
};

export default JobDateInput;
