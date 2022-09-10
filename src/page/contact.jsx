import React from 'react'
import './contact.css'

export default function Contact() {
    return <div className="contactPage">
        <div className="about">
            <div className="title">Contact</div>
            <div className="desc">이 데이터는 빠른 시일 내에<br/>준비될 것입니다. 준비되는<br/>대로 연락 드리겠습니다.</div>
        </div>
        <div className="form">
            <input className="input" placeholder={"성함"}/>
            <input className="input" placeholder={"소속"}/>
            <input className="input" placeholder={"직급"}/>
            <input className="input" placeholder={"Email"}/>
            <button className="button">신청하기</button>
        </div>
    </div>
}
