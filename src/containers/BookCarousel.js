import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/BookCarousel.css';
import BookCard from "../components/BookCard";

const BookCarousel = ({ books }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };


    return (
        <div className="container my-3">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                slidesToSlide={1}
                responsive={responsive}
                swipeable
            >
                {books && books.map((book) => {
                    return (
                        <BookCard key={book.isbn13} data={book} />
                    )
                })}

            </Carousel>
        </div>
    )


}

export default BookCarousel;