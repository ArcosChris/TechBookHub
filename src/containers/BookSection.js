import { useEffect, useState } from "react";
import BookCarousel from "./BookCarousel";
import '../assets/css/BookSection.css'

const BookSection = ({ item, api, sectionTitle }) => {
    const [books, setBooks] = useState([]);
    let sessionName = `${item}-books`

    const checkLocal = () => {
        let existingData = JSON.parse(sessionStorage.getItem(sessionName));
        if (existingData && existingData.length != 0) {
            setBooks(existingData);
        }
        else {
            fetchNewBooks();
        }
    }

    const fetchNewBooks = () => {
        fetch(`${api}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books);
            });
    }

    useEffect(() => {
        checkLocal()
    }, []);

    useEffect(() => {
        sessionStorage.setItem(sessionName, JSON.stringify(books));
    }, [books]);

    return (
        <div className="container is-fluid my-3">
            <div className="new-release-header notification mb-2">
                <h1>{sectionTitle}</h1>
            </div>
            <BookCarousel books={books} />
        </div>


    )
}

export default BookSection;