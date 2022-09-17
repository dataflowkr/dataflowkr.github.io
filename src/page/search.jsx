import React from 'react'
import './search.css'

import TopicCard from '../components/topiccard'
import InputBox from '../components/input'

const cards = [
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
    {title: '장애인 길안내 자율주행 휠체어 융합센서 데이터', desc: 'jpg, pcd / image 288,000 , Lidar 144,000'},
]

export default function Search({nextPage}) {
    return <div className="searchPage">
        <div className="header" style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className="title">DataSet</div>
            <div style={{width: '550px', margin: '0px 0px 10px 0px'}}><InputBox nextPage={nextPage} /></div>
        </div>
        <div style={{margin: '10px 0px', width: '0px'}}></div>
        {cards.map(card => <TopicCard title={card.title} desc={card.desc} nextPage={nextPage} />)}
    </div>
}

