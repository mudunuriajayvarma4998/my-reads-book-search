
import React, {Component} from 'react';
import Book from "./Book.js";

export default class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <marquee><h2 className="bookshelf-title">{this.props.shelfTitle}</h2></marquee>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.bookList.map((book) => {
                                return <li key={book.id}>
                                    <Book book={book} onShelfChange={this.props.onShelfChange}/>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
