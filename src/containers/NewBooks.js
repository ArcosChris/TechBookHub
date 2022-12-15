import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import BookCarousel from "./BookCarousel";
import '../assets/css/NewBook.css'

const NewBooks = () => {
    const [newBooks, setNewBooks] = useState([]);
    const [bookCount, setBookCount] = useState(0);

    const checkLocal = () => {
        let existingData = JSON.parse(sessionStorage.getItem('newBooks'));
        if (existingData && existingData.length != 0) {
            setNewBooks(existingData);
            setBookCount(existingData.length);
        }
        else {
            fetchNewBooks();
        }
    }

    const fetchNewBooks = () => {
        fetch('https://api.itbook.store/1.0/new')
            .then((res) => res.json())
            .then((data) => {
                setNewBooks(data.books);
                setBookCount(parseInt(data.books.length));
            });
    }

    useEffect(() => {
        checkLocal()
    }, []);

    useEffect(() => {
        sessionStorage.setItem('newBooks', JSON.stringify(newBooks));
    }, [newBooks]);
    return (
        <div className="container is-fluid my-3">
            <div className="new-release-header notification mb-2">
                <h1>Top New Releases</h1>
            </div>
            <BookCarousel books={newBooks} />
            {/* <div className="book-container is-secondary has-centered-text">
                <div className="columns is-mobile is-multiline my-2">
                    {newBooks && newBooks.map((book) => {
                        return (
                            <BookCard key={book.isbn13} data={book} />
                        )
                    })}
                </div>
            </div> */}
        </div>


    )
}

export default NewBooks;