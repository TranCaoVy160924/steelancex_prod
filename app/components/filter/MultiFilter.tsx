'use client'

// import CategoryResponse from '@/models/categoryResponse';
// import { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';

interface Option {
    value: number;
    label: string;
}

interface MultiFilterProps {
    options: Option[];
    title?: string;
    placeholder?: string;
    setFilterCategories?: any
}

const MultiFilter: React.FC<MultiFilterProps> = ({ 
    title, 
    options, 
    placeholder,
    setFilterCategories
}) => {
    return (
        <div className="
                w-full 
                h-auto 
                px-3 
                py-3 
                gap-5 
                border-[1px] 
                rounded-15 
                shadow-lg 
                bg-white
            "
        >
            <h1 className="font-semibold my-3">{title}</h1>
            <Select
                placeholder={placeholder}
                options={options}
                className="my-3"
                isClearable
                isMulti
                filterOption={(option, inputValue) =>
                    option.label.toLowerCase().includes(inputValue.toLowerCase())
                }
                onChange={data => {
                    setFilterCategories(data.map(x => x.value));
                }}
            />
        </div>
    );
};

export default MultiFilter;
