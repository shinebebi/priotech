// @ts-ignore
import style from "./services.module.css";
import React from "react";

const service = [
    'Разработка разделов проектной документации стадии П \n в соответствии с ППРФ № 87',
    'Разработка сметной документации стадии П \n в соответствии с Методикой № 421/пр',
    'Разработка разделов проектной документации стадии Р',
    'Оказание услуг по техническому сопровождению Заказчика в процессе получения положительного заключения экспертизы сметной документации и определения достоверности определения сметной стоимости строительства объекта капитального строительства'
]

function Service (props: {text: string}) {
    return (
        <div className={style.service}>
            <p>{props.text}</p>
        </div>
    )
}

function Services () {
    return (
        <section className={style.main}>
            <h2 className={style.title}>Услуги по проектированию</h2>
            <p className={style.sub_title}>
                При комплексной работе по оптимизации проекта компания способна взять на себя услуги по разработке проектно-сметной документации в виде таких работ как:
            </p>
            <div className={style.services_container}>
                {
                    service.map((elem: any, index: number) => (
                        <Service text={elem} key={index}/>
                    ))
                }

            </div>
        </section>
    )
}

export default Services