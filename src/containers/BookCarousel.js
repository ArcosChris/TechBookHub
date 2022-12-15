import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/BookCarousel.css';

const BookCarousel = () => {
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
        <div className="container">
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
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
                <div className="has-text-centered">
                    <img src="https://itbook.store/img/books/9781098103521.png" />
                    <button className="button is-primary is-outlined">Details</button>
                </div>
            </Carousel>
        </div>
    )


}

export default BookCarousel;