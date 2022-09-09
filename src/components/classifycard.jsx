import React from 'react'
import './classifycard.css'

export default function ClassifyCard({nextPage, imgUrl, title, desc}) {
    return(<div className="classifyCard" onClick={nextPage}>
        <img className="image" src={imgUrl} />
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
    </div>)
}
