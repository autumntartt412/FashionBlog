import React from 'react';
import './App.css';


function Article() {
  return (
<>
      <article>
        <h2>Blog Post 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut interdum tempor, 
          lorem odio auctor mi, nec elementum justo nulla non velit. Nam tincidunt dui vel nulla fermentum, 
          ac tincidunt nunc pretium.
        </p>
        <img src="'https://i.postimg.cc/xCvm1J7L/blog-image-1.jpg'" alt="A description of the first blog post's content" />
      </article>

      <article>
        <h2>Blog Post 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus malesuada justo, non 
          bibendum nunc eleifend eget. Phasellus sed erat ut lorem tristique interdum.
        </p>
        <img src="'https://i.postimg.cc/j2R7wq0m/blog-image-2.jpg'" alt="A description of the second blog post's content" />
      </article>
      </>
  );
}
export default function Article() {
  return <Article/>;
}


