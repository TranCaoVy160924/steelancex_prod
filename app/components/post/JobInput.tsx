import { ChangeEvent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface JobInputProps {
  label?: string;
  number: number;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
}

const JobInput: React.FC<JobInputProps> = ({
  label,
  number,
  name,
  value,
  onChange,
  register,
  errors
}) => {
  // const handleInputChange = (e: any) => {
  //   onChange(e.target.value);
  // };

  return (
    <>
      {label && <label>{label}</label>}
      {number > 1 ? (
        <textarea
          rows={number}
          name={name}
          value={value}
          required={true}
          {...(register && register(name))}
          className="
            w-full 
            border-[1px] 
            border-pink-cus-tx 
            rounded-[5px]
          "
          placeholder="..."
        ></textarea>
      ) : (
        <input
          name={name}
          value={value}
          required={true}
          {...(register && register(name))}
          className="
            w-full 
            border-[1px] 
            border-pink-cus-tx 
            rounded-[5px]
          "
          placeholder="..."
        />
      )}
      {errors && (
        <p className="text-red-600 font-semibold h-2">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default JobInput;
