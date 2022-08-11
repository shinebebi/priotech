// @ts-ignore
import style from "./footer.module.css";
import React from "react";

function Footer() {
    return (
        <footer className={style.main}>
            <p className={style.sign}>ООО "ПриоТех"</p>
            <div className={style.link_box}>
                <a href='#header' className={style.link}>О компании</a>
                <a href='#navBar' className={style.link}>Основные направления деятельности</a>
            </div>
            <p className={style.requisites}>
                ОГРН: 1217700142516<br/>
                ИНН: 7736333971<br/>
                КПП: 773601001<br/>
                Юр.адрес: 117335<br/>
                г. Москва ул. Вавилова 69/75<br/>
                этаж Т ком. 1<br/>
            </p>
        </footer>
    )
}

export default Footer

