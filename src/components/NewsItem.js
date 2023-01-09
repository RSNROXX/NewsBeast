import React from 'react';

const NewsItem = (props) => {
  let {title, descp, imageUrl, newsUrl, author, date, source} = props;
  return (
    <div className='my-3'>
      <div className = "card">
        <div style = {{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
          <span class="badge rounded-pill bg-warning text-dark" style = {{left: "90%", zIndex: "1"}}>
            {source}
          </span>
        </div>
        <img src = {!imageUrl ? "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=70": imageUrl} alt = "..."/>
        <div className = "card-body">
          <h5 className = "card-title">{title}</h5>
          <p className = "card-text">{descp}...</p>
          <a rel = "noreferrer" href = {newsUrl} target="_blank" className = "btn btn-sm btn-outline-primary">Read More</a>
          <p className = "card-text"><small className = "text-muted">Author: {!author?"Unknown":author} | Published Date: {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
