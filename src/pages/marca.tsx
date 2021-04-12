import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Product from '../components/Product'
import Menu from '../components/Menu'

import { MenuProvider } from '../contexts/MenuContext'

import styles from '../styles/pages/Marca.module.scss'

import products from '../../products.json'

export default function Marca() {
    const [index, setIndex] = useState(0)

    function nextProduct() {
        if (index === products.length - 1) {
            return false
        }

        const productAtual = document.getElementsByTagName("section")[index + 1].children[0].children[0]
        productAtual.setAttribute("style", `filter: grayscale(${0})`)

        setTimeout(() => {
            const productProximo = document.getElementsByTagName("section")[index].children[0].children[0]
            productProximo.setAttribute("style", `filter: grayscale(${1})`)
        }, 800)

        const scroll = document.getElementsByTagName("section")[index].clientWidth

        document.getElementById("container-produtos").scrollBy(scroll, 0)

        setIndex(index + 1)
    }

    function previousProduct() {
        if (index === 0) {
            return false
        }

        const productAtual = document.getElementsByTagName("section")[index - 1].children[0].children[0]
        productAtual.setAttribute("style", `filter: grayscale(${0})`)

        setTimeout(() => {
            const productAnterior = document.getElementsByTagName("section")[index].children[0].children[0]
            productAnterior.setAttribute("style", `filter: grayscale(${1})`)
        }, 800)

        const scroll = document.getElementsByTagName("section")[index].clientWidth

        document.getElementById("container-produtos").scrollBy(-scroll, 0)

        setIndex(index - 1)
    }

    useEffect(() => {
        const product = document.getElementsByTagName("section")[index].children[0].children[0]
        product.setAttribute("style", `filter: grayscale(${0})`)
    }, [])

    return (
        <div className={styles.marcaContainer}>
            <MenuProvider>
                <Header Page={1} />

                <Menu />
            </MenuProvider>

            <div className={styles.homeMarcaContainer}>
                <span className={styles.titleMarca}>A GM Nutrition</span>

                <div className={styles.marcaContentContainer}>
                    <div>
                        <p>Nascemos com um propósito. Nossa missão é oferecer mais que apenas produtos, viemos com o intuito de criar experiências.</p><br />
                        <p>O projeto foi desenvolvido após anos de estudos e de muito empenho com apenas um objetivo! Trazer ao mundo produtos saudáveis e sustentáveis. Porque para nós ser saudável é muito mais do que apenas cuidar da sua saúde.</p><br />
                        <p>O objetivo é proporcionar ao nosso cliente a inclusão em um ecossistema saudável.</p><br />
                        <p>Buscamos os melhores ingredientes desde a sua origem até a criação de um produto final. </p>
                    </div>
                    <div>
                        <p>Buscamos os melhores ingredientes desde a sua origem até a criação de um produto final. </p><br />
                        <p>Todas as nossas embalagens são totalmente ecológicas e sustentáveis, porque não basta ser saudável. Concluímos que além do nosso corpo, precisamos cuidar do meio em que vivemos e da vida acima de tudo, seja humana ou do planeta. </p><br />
                        <p>Então você descobrirá que não nascemos para estar e sim para ficar, pois a nossa missão é mudar a consciência de cada um e do mundo como um todo. </p><br />
                        <p>Entre nessa missão conosco! Venha para mudar e ficar! Para realmente fazer a diferença.</p>
                    </div>
                </div>
            </div>

            <div id="container-produtos2" className={styles.areaProductsContainer}>
                <div id="container-produtos" className={styles.productsContainer}>
                    <div className={styles.arrowLeft} onClick={() => previousProduct()}>
                        <img src="/icons/arrow.svg" alt="arrow-icon"/>
                    </div>
                    <div className={styles.arrowRight} onClick={() => nextProduct()}>
                        <img src="/icons/arrow.svg" alt="arrow-icon"/>
                    </div>

                    {
                        products.map(product => {
                            return (
                                <Product
                                    key={product.key}
                                    srcImage={product.srcImage}
                                    title={product.title}
                                    subTitle={product.subTitle}
                                    desc={product.desc}
                                    srcCarac={product.srcCarac}
                                />
                            )
                        })
                    }

                    <div className={styles.productContainerDiferenciado}>
                        <div className={styles.areaPhotoProduct}>
                            <img src="/produtos/mocha-s1.png" alt="product"/>
                        </div>
                        <div className={styles.areaInfosProduct}>
                            <span className={styles.titleProduct}>Drink TO GO</span>
                            <span className={styles.subTitleProduct}>coffe mocha</span>
                            <span className={styles.descProduct}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                            <img src="/produtos/carac.png" alt="carac-product"/>

                            <button>tabela nutricional <img src="/icons/tabela.svg" alt="icon-table"/></button>
                            <button>onde encontrar <img src="/icons/local.svg" alt="icon-local"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
