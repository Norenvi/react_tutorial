// DONE
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {books} from './books'
import Book from './Book'

const BookList = () => {
    return (
        <div>
            <h1>Amazon best sellers</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    const {img, title, author, id} = book
                    return <Book {...book} key={book.id} number={index}/>
                })}
            </section>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
