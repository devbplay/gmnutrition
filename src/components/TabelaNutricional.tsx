import { useContext } from 'react'
import { NutriTableContext } from '../contexts/NutriTableContext'

import styles from '../styles/components/TabelaNutricional.module.scss'

export default function TabelaNutricional() {
    const { displayTableNutri, closeTabelaNutricional } = useContext(NutriTableContext)

    return (
        <>
            <div className={styles.containerCloseTabela} style={{ display: displayTableNutri }}>
                <div className={styles.closeContainer} onClick={() => closeTabelaNutricional()}>
                    <img src="/icons/close.svg" alt="close-table" className={styles.closeTable} />
                </div>
            </div>

            <div className={styles.containerTabelaNutricional} style={{ display: displayTableNutri }}>
                <img src="/table.png" alt="tabela-nutri"/>
            </div>
        </>
    )
}
