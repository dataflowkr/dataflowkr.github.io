import React from 'react'
import './topic.css'

import TopicCard from '../components/topiccard'

export default function TopicPage({nextPage}) {
    return (<div className="topicPage">
        <div className="title">Which data<br/>are you searching?</div>
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
    </div>)
}
