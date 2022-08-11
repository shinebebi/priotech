// @ts-ignore
import style from "./engineering.module.css";
import React from "react";

interface IService {
    title: string,
    text: string,
    number: number
}

function Service (props: IService) {
    return (
        <div className={style.service_box}>
            <h3 className={style.service_number}>[0{props.number + 1}]</h3>
            <h4 className={style.service_sub_title}>{props.title}</h4>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}

const services = [
    {
        title: 'Анализ и консультации \n по имеющейся проектной документации',
        text: 'Предоставление заказчику технологии или технологий, необходимых для строительства промышленного объекта и его эксплуатации, разработки проектов по защите конструкций, огнезащите, теплоизоляции и др.'
    },
    {
        title: 'Оптимизация технических решений в проектах строительства различной сложности',
        text: 'Корректировка рабочей документации производится в полном соответствии с требованиями технического задания, нормативных документов и направленно на рациональное использование бюджета клиента.'
    },
    {
        title: 'Поставка оборудования, строительных материалов и техники',
        text: 'Компания ООО «ПриоТех» является партнером ведущих производителей материалов и оборудования различного направления, что позволяет обеспечить непрерывность поставок в больших объемах и по разумной стоимости.'
    }
]

function Engineering () {
    return (
        <section className={style.main} id='ИНЖИНИРИНГ'>
            <h2 className={style.title}>
                ИНЖИНИРИНГ
            </h2>
            <p>
                В комплекс услуг, необходимых для строительства нового объекта, входит:
            </p>
            <div className={style.services_container}>
                {
                    services.map((elem: any, index: number) => (
                        <Service text={elem.text} title={elem.title} key={index} number={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Engineering