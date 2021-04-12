import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/Header.module.scss'

import { MenuContext } from '../contexts/MenuContext'

interface HeaderProps {
    Page?: Number;
    color?: string;
    src?: boolean;
    isScroll?: boolean;
}

export default function Header(props: HeaderProps) {
    const { handleMenu } = useContext(MenuContext)

    const [color, setColor] = useState("transparent")

    const [opacityMarca, setOpacityMarca] = useState((props.Page && props.Page === 1) ? .3 : 0)
    const [opacityEncontrar, setOpacityEncontrar] = useState((props.Page && props.Page === 2) ? .3 : 0)
    const [opacityContato, setOpacityContato] = useState((props.Page && props.Page === 3) ? .3 : 0)

    const [colorHeader, setColorHeader] = useState((props.color) ? props.color : "#ffffff")
    const [srcHeader, setSrcHeader] = useState((props.src) ? "logo-alt.svg" : "logo.svg")

    useEffect(() => {
        if (!props.isScroll) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > window.innerHeight - 100) {
                    setSrcHeader("logo-alt.svg")
                    setColorHeader("#3C3C3C")
                } else {
                    setSrcHeader("logo.svg")
                    setColorHeader("#FFFFFF")
                }
            })
        }
    }, [])

    return (
        <div className={styles.containerHeader} style={{ backgroundColor: `${color}` }}>
            <img src={srcHeader} alt="logo-nutrition" onClick={() => window.location.href = "/"} />

            <div className={styles.linksContainer}>
                <span
                    className={styles.links}
                    style={{ color: colorHeader }}
                    onMouseEnter={() => (!props.Page || props.Page !== 1 ) && setOpacityMarca(.3)}
                    onMouseLeave={() => (!props.Page || props.Page !== 1) && setOpacityMarca(0)}
                    onClick={() => window.location.href = "/marca"}
                >nossa marca</span>
                <div className={styles.underlineLink} style={{ opacity: opacityMarca, border: `1px solid ${colorHeader}` }}></div>
            </div>
            <div className={styles.linksContainer}>
                <span
                    className={styles.links}
                    style={{ color: colorHeader }}
                    onMouseEnter={() => (!props.Page || props.Page !== 2 ) && setOpacityEncontrar(.3)}
                    onMouseLeave={() => (!props.Page || props.Page !== 2 ) && setOpacityEncontrar(0)}
                    onClick={() => window.location.href = "/onde-encontrar"}
                >onde encontrar</span>
                <div className={styles.underlineLink} style={{ opacity: opacityEncontrar, border: `1px solid ${colorHeader}` }}></div>
            </div>
            <div className={styles.linksContainer}>
                <span
                    className={styles.links}
                    style={{ color: colorHeader }}
                    onMouseEnter={() => (!props.Page || props.Page !== 3 ) && setOpacityContato(.3)}
                    onMouseLeave={() => (!props.Page || props.Page !== 3 ) && setOpacityContato(0)}
                    onClick={() => handleMenu()}
                >contato</span>
                <div className={styles.underlineLink} style={{ opacity: opacityContato, border: `1px solid ${colorHeader}` }}></div>
            </div>
        </div>
    )
}
