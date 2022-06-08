// @ts-ignore
import style from "./thermalInsulation.module.css";
import React from "react";

function ThermalInsulation () {
    return (
        <section className={style.main} id='ТЕПЛОИЗОЛЯЦИЯ'>
            <h2 className={style.title}>Техническая теплоизоляция конструкций и оборудования</h2>
            <p className={style.sub_title}>Технические решения, предлагаемые нашей компанией, соответствуют следующим критериям:</p>
            <div className={style.solutions_container}>
                <p className={style.text}>Энергоэффективные и долговечны, сохраняют энергосберегающий эффект в течение всего срока эксплуатации</p>
                <p className={style.text}>Применяемые покрытия тепловой изоляции герметичны, стойкие к УФ излучению, к агрессивным средам (кислоты, щелочи) и обеспечивают защиту теплоизоляционного слоя от механических повреждений.</p>
            </div>
            <p className={style.sub_title}>
                Специалисты компании оказывают разносторонний подбор решения под задачу, решаемую на объекте.<br/>
                При этом могут быть использованы различные варианты используемых продуктов:
            </p>
            <p>
                - Маты, плиты и рулоны;<br/>
                - Защитные оболочки и цилиндры;<br/>
                - Эндотемические маты;<br/>
                - Термочехлы.
            </p>
        </section>
    )
}

export default ThermalInsulation