import { useContext } from 'react'
import { NutriTableContext } from '../contexts/NutriTableContext'
import styles from '../styles/components/InfsProduct.module.scss'

interface ProductProps {
    title: string;
    subTitle: string;
    desc: string;
    srcCarac: string;
}

export default function InfsProduct(props: ProductProps) {
    const { displayInfs, openTabelaNutricional } = useContext(NutriTableContext)

    return (
        <div className={styles.areaInfosProduct} style={{ display: displayInfs }}>
            <span className={styles.titleProduct}>{props.title}</span>
            <span className={styles.subTitleProduct}>{props.subTitle}</span>
            <span className={styles.descProduct}>{props.desc}</span>

            <img src={props.srcCarac} alt="carac-product"/>

            <button onClick={() => openTabelaNutricional()}>tabela nutricional <img src="/icons/tabela.svg" alt="icon-table" /></button>
            <button>onde encontrar <img src="/icons/local.svg" alt="icon-local" /></button>
        </div>
    )
}
