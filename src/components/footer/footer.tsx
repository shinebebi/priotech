// @ts-ignore
import style from "./footer.module.css";
import React from "react";

function Footer() {
    return (
        <footer className={style.main}>
            <p className={style.sign}>ООО "ПриоТех"</p>
            <div className={style.link_box}>
                <p>О компании</p>
                <p>Услуги</p>
                <p>Контакты</p>
            </div>
        </footer>
    )
}

export default Footer

