import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 className='header'>{title}</h1>
      <div data-testid='our-div'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione in
          autem?
        </p>
      </div>
    </>
  );
}
