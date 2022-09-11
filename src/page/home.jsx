import React from 'react'
import InputBox from '../components/input'
import './home.css'

export default function Home({nextPage}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            transform: 'translate(-50%, 0%)',
            position: 'absolute',
            left: '50%',
            width: '60%',
            gap: '40px',
        }}>
            <img className="main" src="/auto.jpeg" style={{borderRadius:'10px', scale: '0.8'}} />
            <InputBox nextPage={nextPage} />
            <div className="tag">
                <h3># 자율주행</h3>
                <h3># 챗봇 데이터</h3>
                <h3># 위암 이미지 데이터</h3>
            </div>
        </div>
    )
}
