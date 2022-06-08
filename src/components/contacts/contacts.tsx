// @ts-ignore
import style from "./contacts.module.css";
import React from "react";
// @ts-ignore
import tg from './icon_tg.png'
// @ts-ignore
import wa from './icon_wa.png'
// @ts-ignore
import image from './img_3.jpeg'

interface IInfo {
    title: string,
    children: any
}

function Info (props: IInfo) {
    return (
        <div className={style.info_box}>
            <h3 className={style.info_title}>[{props.title}]</h3>
            {props.children}
        </div>
    )
}

function Contacts () {
    return (
        <section className={style.main}>
            <div className={style.img_box}>
                <img className={style.image} src={image}/>
            </div>
            <div className={style.contacts_container}>
                <h2 className={style.title}>КОНТАКТЫ</h2>
                <div className={style.info_container}>
                    <Info title='СВЯЗЬ'>
                        <p>
                            +7 999 999 99 99<br/>
                            prioritet@tech.ru
                        </p>
                    </Info>
                    <Info title='ОФИС'>
                        <p>
                            Москва, пос. Сосенское,<br/>
                            пр. Магеллана 1<br/>
                            Офис 143
                        </p>
                    </Info>
                    <Info title='СОЦСЕТИ'>
                        <div className={style.icons}>
                            <img className={style.icon} src={wa}/>
                            <img className={style.icon} src={tg}/>
                        </div>
                    </Info>
                    <Info title='КАРТОЧКА КОМПАНИИ'>
                        <p>
                            47344 48429 4829 8329<br/>
                            ИНН 4842095535<br/>
                            ОГРН 7344 48429 4829 8329<br/>
                            ИТД 7344 48429 4829 8329
                        </p>
                    </Info>
                </div>
            </div>
        </section>
    )
}
export default Contacts