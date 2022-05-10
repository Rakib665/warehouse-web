import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-5'>
            {/* <h2 className='text-center text-secondary'>This is the blog section</h2> */}

            <div className='blog-div'>
                <h2 className='text-secondary text-center'> Difference between javascript and nodejs</h2>
                <p>JavaScript is a simple programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be easily accessible from JavaScript programming to make it more useful.</p>
            </div>
            <div className='blog-div'>
                <h2 className='text-secondary text-center'>When should you use nodejs and when should you use mongodb</h2>
                <p>Due to single-threaded nature, Node. js is primarily used for non-blocking, event-driven servers. It is used for traditional web sites and back-end API services, but it was designed with real-time, push-based architectures in mind.</p>
                <p> When your data is document-centric and does not fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases, NoSQL databases like MongoDB are a good choice.</p>
            </div>
            <div className='blog-div'>
                <h2 className='text-secondary text-center'> Differences between sql and nosql databases</h2>
                <p>
                    SQL databases scale vertically, whereas NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases are better suited for multi-row transactions, whereas NoSQL databases are better suited for unstructured data such as documents or JSON.
                </p>
            </div>
            <div className='blog-div'>
                <h2 className='text-secondary text-center'> What is the purpose of jwt and how does it work</h2>
                <p>
                JWT, or JSON Web Token, is an open standard that allows two parties — a client and a server — to exchange security information. Each JWT includes encoded JSON objects as well as a set of claims. JWTs use a cryptographic algorithm to ensure that the claims cannot be changed after the token is issued.
                </p>
            </div>
        </div>
    );
};

export default Blogs;