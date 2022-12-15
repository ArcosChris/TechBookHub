import React from "react";


const BookCard = ({ data }) => {
    return (
        <div className="column is-4-mobile is-3-tablet is-2-desktop has-text-centered">
            <figure className="image is-2by3">
                <img src={data.image} />
            </figure>
            <button className="button is-primary is-outlined">Details</button>
        </div>
    )
}

export default BookCard;