import styles from '../styles/components/Loja.module.scss'

interface LojaProps {
    title: string;
    local: string;
    email: string;
    phone: string;
    horario: string;
    url: string;
}

export default function Loja(props: LojaProps) {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.local}>{props.local}</span>
            <span className={styles.email}>{props.email}</span>
            <span className={styles.phone}>{props.phone}</span>

            <span className={styles.funcionamento}>Horário de funcionamento:</span>
            <span className={styles.horario}><b>{props.horario}</b></span>

            <button onClick={() => window.open(props.url, "_blank")}>
                <img src="/icons/insta-alt.svg" alt="insta-alt" /> @gmmarket.oficial
            </button>
        </div>
    )
}
