import React from 'react'
import StarRatingComponent from 'react-rating-stars-component';

const Filter = ({ title, rate }) => {
    return (
        <div className="filter">
            <div>
                <input
                    type="text"
                    placeholder="Search a movie"
                    className="searchbox"
                    onChange={(e) => title(e.target.value)}
                />
            </div>

            <StarRatingComponent
                starCount={7}
                onStarClick={(r) => rate(r)}

            />
        </div >

    )

};
export default Filter;