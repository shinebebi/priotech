// @ts-ignore
import style from "./navBar.module.css";
import React from "react";
// @ts-ignore
import image1 from './img_1.jpeg'
// @ts-ignore
import image2 from './img_2.jpeg'
// @ts-ignore
import image3 from './img_3.png'
// @ts-ignore
import image4 from './img_4.jpeg'



interface IPicture {
    img: any,
    title: string
}

function Picture(props: IPicture) {
    return (
        <a className={style.picture} href={`#${props.title}`}>
            <h2 className={style.picture_title}>{props.title}</h2>
            <img src={props.img} alt={props.title} className={style.picture_img}/>
        </a>
    )
}

function NavBar() {
    return (
        <section className={style.main} id='navBar'>
            <h2 className={style.header}>ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ:</h2>
            <div className={style.picture_box}>
                <Picture img={image1} title='ИНЖИНИРИНГ'/>
                <Picture img={image2} title='АНТИКОРРОЗИОННАЯ ЗАЩИТА'/>
                <Picture img={image3} title='ОГНЕЗАЩИТА'/>
                <Picture img={image4} title='ТЕПЛОИЗОЛЯЦИЯ'/>
            </div>
        </section>
    );
}
export default NavBar