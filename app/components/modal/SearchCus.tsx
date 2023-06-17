'use client'

import { useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import FormatCusMd from './FormatCusMd';

const SearchCus = () => {
    const [, setSearchTerm] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <FormatCusMd>
            <div className="
                    flex
                    flex-row 
                    justify-center
                "
            >
                <div className="
                        relative 
                        w-full 
                        h-16 
                        mx-auto 
                        px-16
                    "
                >
                    <input
                        type="text"
                        placeholder="Search freelance work"
                        className="
                            w-full 
                            h-full 
                            px-10 
                            py-2 
                            rounded-md 
                            border border-gray-cus 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-pink-cus-bt 
                            text-xl 
                            pr-12
                        "
                        onChange={handleSearch}
                    />
                    <div className="
                            absolute 
                            top-0 
                            right-0 
                            flex 
                            items-center 
                            h-full 
                            pr-20
                        "
                    >
                        <div className="
                                p-1 
                                bg-pink-cus-bt 
                                rounded-full 
                                text-white 
                                cursor-pointer
                            "
                        >
                            <BiSearch size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </FormatCusMd>
    );
}

export default SearchCus