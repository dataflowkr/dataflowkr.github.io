import React from 'react'
import InputBox from '../components/input'
import './home.css'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            transform: 'translate(-50%, 0%)',
            position: 'absolute',
            left: '50%',
            width: '70%',
            gap: '40px',
            marginTop: '80px',
        }}>
            <img src="/sample.png" style={{borderRadius:'10px'}} />
            <InputBox />
            <div className="tag">
                <h3># 자율주행</h3>
                <h3># 챗봇 데이터</h3>
                <h3># 위암 이미지 데이터</h3>
            </div>
        </div>
    )
}
