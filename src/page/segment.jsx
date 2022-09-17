import React from 'react'
import './segment.css'

import TopicCard from '../components/topiccard'

const cards = [
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
]

export default function Segment({nextPage}) {
    return <div className="segmentPage">
        {cards.map(card => <TopicCard title={card.title} desc={card.desc} nextPage={nextPage} />)}
    </div>
}
