import React from "react";
// @ts-ignore
import style from "./steps.module.css";
// @ts-ignore
import image from './img_7.jpeg'

type TStep = {
    text: string,
    number: number,
    key: number,
};

const steps = [
    'Полный анализ имеющейся проектной документации \n с предоставлением итоговой документации',
    'Обозначение ключевых позиций, имеющих потенциал к оптимизации за счёт корректировки использованных решений',
    'Предоставление вариантов решений с их количественными \n и ценовыми показателями',
    'Разработка или корректировка рабочей документации \n по согласованному ТЗ',
    'Комплектация объекта по заранее согласованной стоимости'
]

function Step (props: TStep) {
    return (
        <div className={style.step_box} style={{borderBottom: props.number === 4 ? 'none' : '1px solid #151515'}}>
            <h3 className={style.number}>[0{1 + props.number}]</h3>
            <p>{props.text}</p>
        </div>
    )
}

function Steps() {
    return (
        <section className={style.main_container}>
            <div className={style.main}>
                <h2 className={style.header}>ЭТАПЫ РАБОТЫ:</h2>
                <div className={style.steps_container}>
                    {
                        steps.map((elem: string, index: number) => (
                            <Step text={elem} key={index} number={index}/>
                        ))
                    }
                </div>
            </div>
            <div className={style.img_box}>
                <img src={image} className={style.img}/>
            </div>
        </section>
    )
}
export default Steps