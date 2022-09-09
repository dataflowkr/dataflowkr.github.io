import React from 'react'
import './search.css'

import TopicCard from '../components/topiccard'
import InputBox from '../components/input'

export default function Search({nextPage}) {
    return <div className="searchPage">
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '120px', height: '60px', marginBottom: '60px'}}>
            <div className="title">DataSet</div>
            <div style={{width: '450px'}}><InputBox nextPage={nextPage} /></div>
        </div>
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
        <TopicCard title={'hello'} desc={'world'} nextPage={nextPage} />
    </div>
}

