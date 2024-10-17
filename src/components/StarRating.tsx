// components/StarRating.tsx
import React from 'react';

type StarRatingProps = {
  rating: number; // The current rating value
  onRatingChange?: (rating: number) => void; // Optional: A function to handle rating change
};

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={`size-6 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => onRatingChange && onRatingChange(star)} // Call the handler if provided
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.909c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.89a1 1 0 00-1.175 0l-3.974 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.59 10.1c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
