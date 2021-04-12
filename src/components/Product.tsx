import TabelaNutricional from '../components/TabelaNutricional'
import InfsProduct from '../components/InfsProduct'
import { NutriTableProvider } from '../contexts/NutriTableContext'

import styles from '../styles/components/Product.module.scss'

interface ProductProps {
    srcImage: string;
    title: string;
    subTitle: string;
    desc: string;
    srcCarac: string;
}

export default function Product(props: ProductProps) {
    return (
        <section className={styles.productContainer}>
            <div className={styles.areaPhotoProduct}>
                <img id="product-image" src={props.srcImage} alt="product" />
            </div>

            <div className={styles.rightContainer}>
                <NutriTableProvider>
                    <TabelaNutricional />

                    <InfsProduct
                        title={props.title}
                        subTitle={props.subTitle}
                        desc={props.desc}
                        srcCarac={props.srcCarac}
                    />
                </NutriTableProvider>
            </div>
        </section>
    )
}
