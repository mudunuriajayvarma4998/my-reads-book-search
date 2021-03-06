/**
 * Created by anirudh.r on 08/07/17.
 */

import React, {Component} from 'react';

export default class Book extends Component {
    onBookShelfChange = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    };

    render() {
        const {book} = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: (`url(${ (book.imageLinks) ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : "https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art"})`) }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.onBookShelfChange} defaultValue={book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">currently Reading</option>
                            <option value="wantToRead">want To Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>);
    }
}
