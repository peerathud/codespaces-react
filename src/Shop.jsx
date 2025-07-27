import React, { useState } from 'react';
import './Shop.css';
export default function Shop() {
    const books = [
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];

    const [query, setQuery] = useState("");
    const [cart, setCart] = useState([]);
    const filterlist = books.filter((b) =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase())
    );
    const booklist = filterlist.map((b) =>
        <div className=" book-item" key={b.id}>
            <img className="book-thumbnail" src={b.image_url} alt={b.title} title={b.title} />
            <div className="book-title">{b.title}</div>
            <div className="book-author">{b.author}</div>
            <div className="book-price">{b.price}</div>
            <button className="add-cart-btn" onClick={() => setCart([...cart, { "title": b.title, "price": b.price }])}> Add to cart</button>
        </div>
    );
    let total = 0;
    // cart.forEach(b=>total+=b.price);
    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }
    return (
        <>
            <header >
                <h1>Book Heaven</h1>
                <p>Your one-stop shop for all your book needs</p>
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <div className="page-container">   <div className="searchbox">
                search : <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
                <div className="book-container">
                    {booklist}
                </div>
                <div className="cart-title">Cart          <ol> {
                    cart.map((b, index) => <li key={index}>
                        <div className="book-title-cart">{b.title}</div>
                        <div className="book-price-cart">{b.price}$</div>
                    </li>)
                }
                </ol></div>
                <div className="cart-container">

                    <div className="total">Total : {total.toFixed(2)}</div>
                    <button className="clear-cart-btn" onClick={() => setCart([])}>Clear cart</button>
                </div></div>

        </>
    );
}