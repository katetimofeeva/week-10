import React from "react";

// A HTML and CSS only rating picker thanks to: https://codepen.io/chris22smith/pen/MJzLJN

const RatingPicker = ({ rating, onChange }) => {
  return (
    <p className="rating-picker">
      {[5, 4, 3, 2, 1].map(value => (
        <React.Fragment key={value}>
          <input
            className="radio-input"
            type="radio"
            id={`star${value}`}
            name="rating"
            value={value}
            checked={rating === value}
            onChange={() => onChange(value)}
          />
          <label
            className="radio-label"
            htmlFor={`star${value}`}
            title={`${value} stars`}
          >
            {value} stars
          </label>
        </React.Fragment>
      ))}
    </p>
  );
};

export default RatingPicker;
