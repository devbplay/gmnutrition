import styles from '../styles/components/Inspiration.module.scss'

export default function Inspiration() {
    return (
        <div className={styles.inspirationContainer}>
            <div className={styles.inspirationIconArea}>
                <div className={styles.inspirationCircle}>
                    <img src="/icons/inspiration.svg" alt="inspiration-icon"/>
                </div>
            </div>

            <div className={styles.inspirationTitle}>
                <span>lorem ipsum</span>
            </div>

            <div className={styles.inspirationContent}>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </span>
            </div>
        </div>
    )
}
