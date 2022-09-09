import React from 'react'
import './inputbox.css'

export default function InputBox({nextPage}) {
    return (<div style={{display: 'flex', gap: '12px'}}>
        <input className="inputBox" placeholder="데이터셋을 검색해보세요"/>
        <button onClick={nextPage} className="inputSubmit">검색</button>
    </div>)
}
