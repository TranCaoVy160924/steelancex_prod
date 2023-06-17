'use client'

import { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface PriceFilterProps {
  onChange: (from: number, to: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onChange }) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const { t } = useTranslation()

  const handlePriceFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setPriceFrom(event.target.value);
    onChange(value, parseFloat(priceTo));
  };

  const handlePriceToChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setPriceTo(event.target.value);
    onChange(parseFloat(priceFrom), value);
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
      <h1 className="font-semibold my-3">{t("Price")}</h1>
      <div className="flex flex-row mb-4">
        <input
          type="number"
          value={priceFrom}
          onChange={handlePriceFromChange}
          className="
            border 
            border-gray-300 
            px-2 
            py-1 
            rounded
          "
          placeholder="From"
        />
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={priceTo}
          onChange={handlePriceToChange}
          className="
            border 
            border-gray-300 
            px-2 
            py-1 
            rounded
          "
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default PriceFilter;

