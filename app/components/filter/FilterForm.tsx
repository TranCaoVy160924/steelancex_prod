'use client'

import PriceFilter from './PriceFilter';
// import TimeFilter from './TimeFilter';

interface FilterFormProps {
  onPriceChange: (from: number, to: number) => void;
  onTimeChange: (from: Date, to: Date | null) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ 
  onPriceChange, 
  // onTimeChange 
}) => {
  return (
    <div className="space-y-1">
      <PriceFilter onChange={onPriceChange} />
      {/* <TimeFilter onChange={onTimeChange} /> */}
    </div>
  );
};

export default FilterForm;
