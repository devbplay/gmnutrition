import Header from '../components/Header'
import Loja from '../components/Loja'
import Menu from '../components/Menu'

import { MenuProvider } from '../contexts/MenuContext'

import styles from '../styles/pages/OndeEncontrar.module.scss'

export default function OndeEncontrar() {
    return (
        <div className={styles.containerOndeEncontrar}>
            <MenuProvider>
                <Header Page={2} color="#3C3C3C" src={true} isScroll={true} />

                <Menu />
            </MenuProvider>

            <div className={styles.lojasContainer}>
                <Loja
                    title="GM Market 1"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />

                <Loja
                    title="GM Market 2"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />

                <Loja
                    title="GM Market 3"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />

                <Loja
                    title="GM Market 4"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />

                <Loja
                    title="GM Market 5"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />

                <Loja
                    title="GM Market 6"
                    local="Av. Me. Leônia Milito, 1400 - Loja 01 - Bela Suíça"
                    email="contato@gmmarket.com.br"
                    phone="(43) 3361-3986"
                    horario="Seg - Sex das 9h as 21h"
                    url="https://www.instagram.com/gmnutrition.oficial/"
                />
            </div>
        </div>
    )
}
