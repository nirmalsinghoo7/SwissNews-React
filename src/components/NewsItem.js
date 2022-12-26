import React from 'react'

const NewsItem = (props) =>{

    let {title, description, imgUrl,newsUrl,cateGory, publishedAt, author} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imgUrl?imgUrl:'http://cdn.wionews.com/sites/default/files/2022/12/14/318142-shooting-star-20241271280.png'} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text"><small className="text-muted" title='Date'>&#128197; {new Date(publishedAt).toGMTString() }</small></p>
            <h5 className="card-title" title={title}>{title} <span className='badge bg-success'>{cateGory}</span></h5>
            <p className="card-text">{description}</p>

            <p className="card-text"><small className="text-muted" title='Author Name'>&#9997; {!author?"Unknown":author}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer" > Read More</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItem