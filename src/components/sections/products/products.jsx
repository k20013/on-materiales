import styles from './products.module.css';

import ProductInfo from '../../layout/product info/product info';

import { cementoBg, hierrosBg, ladrillosBg, lozaBg, weberBg } from '../../../assets/products/export';

const Products = () => {

    return (
        <section className={styles.products}>

            <div>
                <article className={styles.product}>
                    <h1>Materiales para loza</h1>
                    <div className={styles.content}>
                        <ProductInfo producto={"Mallas"} medidas={["3,8 15X25", "5,5 15X25", "5,5 15X15"]} />
                        <ProductInfo producto={"Telgopor"} medidas={["10cm", "12cm"]} />
                        <ProductInfo producto={"Vigueta"} medidas={["2m", "3m", "3,4m", "3,6m", "4m", "4,4m", "4,6m", "5m"]} />
                    </div>
                </article>
                <div style={{ backgroundImage: `url(${lozaBg})` }}></div>
            </div>

            <div style={{ alignSelf: "flex-start" }}>
                <article className={styles.product}>
                    <h1>Cemento</h1>
                    <div className={styles.content}>
                        <ProductInfo producto={"Cemento"} medidas={["Holcim", "Avellaneda"]} />
                        <ProductInfo producto={"Bolsón"} medidas={["Arena", "Piedra"]} />
                        <ProductInfo producto={"Cal"} medidas={["Común", "Hidratada extra"]} />
                    </div>
                </article>
                <div style={{ backgroundImage: `url(${cementoBg})` }}></div>
            </div>

            <div style={{ alignSelf: "center" }}>
                <article className={styles.product}>
                    <h1>Ladrillos</h1>
                    <div className={styles.content}>
                        <ProductInfo producto={"Hueco"} medidas={["8X18X33", "12X18X33-9T", "18X18X39 12T"]} />
                        <ProductInfo producto={"Portante"} medidas={["12X19X39", "18X19X39"]} />
                        <ProductInfo producto={"Bloq Cemento"} medidas={["13X19X39", "19X19X39"]} />
                        <ProductInfo producto={"Ladrillo común"} medidas={[]} />
                    </div>
                </article>
                <div style={{ backgroundImage: `url(${ladrillosBg})` }}></div>
            </div>

            <div>
                <article className={styles.product}>
                    <h1>Hierros de construcción</h1>
                    <div className={styles.content}>
                        <ProductInfo producto={"Hierro"} medidas={["4", "6", "8", "10", "12", "16", "20"]} />
                    </div>
                </article>
                <div style={{ backgroundImage: `url(${hierrosBg})` }}></div>
            </div>

            <div style={{ alignSelf: "flex-start" }}>
                <article className={styles.product}>
                    <h1>weber</h1>
                    <div className={styles.content}>
                        <ProductInfo producto={"Peg. Weber"} medidas={["30kg"]} />
                        <ProductInfo producto={"Ceresita"} medidas={["1lt", "4lt", "10lt", "20lt", "200lt"]} />
                    </div>
                </article>
                <div style={{ backgroundImage: `url(${weberBg})` }}></div>
            </div>

        </section>
    )
}
export default Products;