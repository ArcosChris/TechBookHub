import React from "react";
import '../assets/css/BookCard.css';


const BookCard = ({ data }) => {
    return (
        <div className="book-carousel-card has-text-centered m-3 px-3 pb-3">
            <img className="mt-2" src={data.image} />
            <button className="button is-primary is-outlined is-fullwidth">Details</button>
        </div>
    )
}

export default BookCard;