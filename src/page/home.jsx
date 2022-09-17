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
            width: '70%',
            maxWidth: '600px',
            gap: '40px',
        }}>
            <img className="main" src="/auto.png" />
            <InputBox nextPage={nextPage} />
        </div>
    )
}
