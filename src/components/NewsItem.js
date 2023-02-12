import React, { Component } from 'react'


export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, author,source } = this.props;

        return (

            <div className='container' style={{marginTop:'14px'}}>
                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{left:'90%',zIndex: '1'}}>
                        {source}

                    </span>
                    <img src={!imageUrl ? "https://img.freepik.com/premium-vector/news-concept-illustration-flat-design_23-2148268772.jpg?w=2000" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-secondary'>{author}  {new Date(publishedAt).toGMTString(publishedAt)}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
