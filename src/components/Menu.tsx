import { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext'
import styles from '../styles/components/Menu.module.scss'

export default function Menu() {
    const { rightMenu, displayMenu, handleMenu } = useContext(MenuContext)

    return  (
        <div
            className={styles.container}
            style={{
                right: rightMenu,
                display: displayMenu
            }}
        >
            <div className={styles.areaCloseButton} style={{ display: displayMenu, right: rightMenu }}>
                <img src="/icons/close.svg" alt="close-menu" onClick={() => handleMenu()} />
            </div>

            <span className={styles.title}>Vamos</span>
            <span className={styles.title}>conversar!</span>

            <span className={styles.subtitle}>As melhores ideias começam com uma conversa</span>

            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu E-mail" />

            <textarea name="message" id="text-message" placeholder="Como podemos ajudar?"></textarea>

            <button className={styles.sendEmailButton}>Enviar</button>
        </div>
    )
}
