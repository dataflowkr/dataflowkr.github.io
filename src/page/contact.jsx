import React from 'react'
import './contact.css'
import {Slider} from '@material-ui/core'

const customMarks = [
    {
      value: 50,
      label: '₩1억',
    },
    {
      value: 40,
      label: '₩1000만',
    },
    {
      value: 30,
      label: '₩100만',
    },
    {
      value: 20,
      label: '₩10만',
    },
    {
      value: 10,
      label: '₩0',
    },
  ];

export default function Contact() {
    const [value, changeValue] = React.useState(10)
    return <div className="contactPage">
        <div className="about">
            <div className="title">Contact</div>
            <div className="desc">이 데이터는 빠른 시일 내에<br/>준비될 것입니다. 준비되는<br/>대로 연락 드리겠습니다.</div>
        </div>
        <div className="form">
        <div className="title">What's your price?</div>
            <Slider
                style={{marginBottom: "50px"}}
                min={10}
                max={50}
                step={10}
                value={value}
                marks={customMarks}
                onChange={(e, v) => {
                    changeValue(v)
                }}          
            />
            <input className="input" placeholder={"성함"}/>
            <input className="input" placeholder={"소속"}/>
            <input className="input" placeholder={"직급"}/>
            <input className="input" placeholder={"Email"}/>
            <button className="button">신청하기</button>
        </div>
    </div>
}
