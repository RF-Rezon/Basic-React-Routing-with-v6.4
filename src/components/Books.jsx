import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {


    const {books} = useLoaderData();
    
    return (
        <div>
          <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            {books.map(book =>
                <div className='overflow-hidden relative'>
                    <img src={book.image} alt="book cover" className='object-cover w-full'/>

                    <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0 text-xl' >
                        <div className='my-auto p-5 ml-9 mt-24'>
                            <p>{book.title}</p>
                            <br />
                            <p>{book.subtitle}</p>
                            <br />
                            <p>Price: {book.price}</p>
                        </div>
                    </div>
                </div>
                )}
          </div>
        </div>
    );
};

export default Books;