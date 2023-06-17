import { VscStarFull, VscStarEmpty } from 'react-icons/vsc';

interface RatingProps {
  rating?: number;
  maxStars: number;
  sizeCus: number;
}

const Rating: React.FC<RatingProps> = ({ 
  rating=0, 
  maxStars,
  sizeCus 
}) => {
  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={starNumber}
            className={`text-pink-cus-bt cursor-pointer ${
              starNumber <= rating ? 'text-pink-cus-bt' : 'text-gray-cus'
            }`}
          >
            {starNumber <= rating ? (
              <VscStarFull size={sizeCus} />
            ) : (
              <VscStarEmpty size={sizeCus} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating