import React from 'react'
import InputBox from '../components/input'
import './home.css'

export default function Home({nextPage}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '60%',
            gap: '40px',
        }}>
            <img className="main" src="/auto.jpeg" />
            <InputBox nextPage={nextPage} />
        </div>
    )
}
