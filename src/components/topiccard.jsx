import React from 'react'
import './topiccard.css'

export default function TopicCard({title, desc, nextPage}) {
    return <div className="topicCard" onClick={nextPage}>
        <svg className="buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(0, 204, 255)">
            <g color="rgb(0, 204, 255)" weight="fill">
                <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,8.00675,0,0,1,11.0625,11.57812Z"></path>
            </g>
        </svg>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="cardTitle">{title}</div>
            <div className="desc">{desc}</div>
        </div>
    </div>
}
