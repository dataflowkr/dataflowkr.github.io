import React from 'react'
import './topiccard.css'

export default function TopicCard({title, desc, nextPage}) {
    return <div className="topicCard" onClick={nextPage}>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
    </div>
}
