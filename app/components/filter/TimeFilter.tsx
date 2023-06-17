'use client'

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from "react-i18next"

const TimeFilter = () => {
    const { t } = useTranslation()
    const [from, setFrom] = useState<Date | null>(null);
    const [to, setTo] = useState<Date | null>(null);

    const handleFromDateChange = (date: Date | null) => {
        setFrom(date);
    };

    const handleToDateChange = (date: Date | null) => {
        setTo(date);
    };

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
            <h1 className="font-semibold my-3">{t("Timing")}</h1>
            <div className="flex flex-row mb-4">
                <DatePicker
                    selected={from}
                    onChange={handleFromDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="
                        px-2 
                        py-1 
                        border 
                        border-gray-300 
                        rounded
                    "
                    placeholderText="From"
                />
            </div>
            <div className="flex items-center">
                <DatePicker
                    selected={to}
                    onChange={handleToDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="
                        px-2 
                        py-1 
                        border 
                        border-gray-300 
                        rounded
                    "
                    placeholderText="To"
                />
            </div>
        </div>
    );
};

export default TimeFilter;

