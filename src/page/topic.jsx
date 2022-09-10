import React from 'react'
import './topic.css'

import TopicCard from '../components/topiccard'

const cards = [
    {title: '도로 CCTV', desc: 'write descriptions here'},
    {title: 'Segmentation map', desc: 'write descriptions herer'},
    {title: '3D 시뮬레이션', desc: 'write descriptions herer'},
    {title: '기타', desc: 'write descriptions herer'},
]

export default function TopicPage({nextPage}) {
    return (<div className="topicPage">
        <div className="title">Which data<br/>are you searching?</div>
        {cards.map(card => <TopicCard title={card.title} desc={card.desc} nextPage={nextPage} />)}
    </div>)
}
