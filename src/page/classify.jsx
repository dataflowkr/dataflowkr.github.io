import React from 'react'
import './classify.css'

import ClassifyCard from '../components/classifycard'

export default function TopicPage({nextPage}) {
    return (<div className="classifyPage">
        <ClassifyCard 
            nextPage={nextPage}
            imgUrl={"/optimized.jpeg"}
            title={"최적화"}
            desc={"4년간 수집한 데이터셋"} />
        <ClassifyCard 
            nextPage={nextPage}
            imgUrl={"/private.jpeg"}
            title={"개인"}
            desc={"4년간 수집한 데이터셋"} />
        <ClassifyCard 
            nextPage={nextPage}
            imgUrl={"/open.jpeg"}
            title={"오픈"}
            desc={"4년간 수집한 데이터셋"} />
    </div>)
}