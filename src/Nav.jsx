import React from 'react';
import './App.css';

function Nav() {
  return (
    <>
    <div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <a href="https://www.example1.com">Women's</a>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <a href="https://www.example2.com">Men's</a>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <a href="https://www.example3.com">On the Street</a>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <a href="https://www.example4.com">The Catwalk</a>
            </li>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <a href="https://www.example4.com">AdWatch</a>
            </li>
            <li style={{ display: 'inline' }}>
              <a href="https://www.example4.com">About</a>
            </li>
          </ul>
        </nav>
    </div>
    </>
  );
}
export default function Nav() {
  return <Nav/>;
}
