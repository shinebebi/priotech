import React from 'react';
// @ts-ignore
import style from './header.module.css'
// @ts-ignore
import img from './img_1.jpg'

function Header() {
    return (
        <section className={style.main} id='header'>
            <h1 className={style.header}>ПРИОРИТЕТНЫЕ ТЕХНОЛОГИИ</h1>
            <p className={style.header_text}>
                Специализированная инжиниринговая компания <span className={style.name}>ООО «Приоритетные Технологии»</span> предлагает своим клиентам отдельные виды инженерно-технических услуг<br/>
                по направлению защиты строительных конструкций и оборудования.
            </p>
            <button className={style.button}>
                <a href="tel:+7-(495)-180-03-70" className={style.link}>СВЯЗАТЬСЯ</a>
                <a href='#contacts' className={style.hover}>КОНТАКТЫ</a>
            </button>
            <div className={style.img_box}>
                <img src={img} className={style.img}/>
            </div>
        </section>
    );
}
export default Header