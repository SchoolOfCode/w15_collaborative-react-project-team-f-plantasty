import React from 'react';

export default function VegucateMeCard({
  title,
  summary,
  listItem1,
  listItem2,
  listItem3,
  src,
}) {
  return (
    <div class="card" style={{ width: '18rem' }}>
      <img src={src} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{summary}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{listItem1}</li>
        <li class="list-group-item">{listItem2}</li>
        <li class="list-group-item">{listItem3}</li>
      </ul>
      <div class="card-body">
        {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>  */}
      </div>
    </div>
  );
}
