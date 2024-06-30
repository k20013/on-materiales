import styles from './product.module.css';

import List from '../../../shared/list/list';
import { cementoBg, hierrosBg, ladrillosBg, lozaBg, weberBg } from '../../../../assets/products/export';


export const Loza = () => {
    return (
        <div className={styles.productContainer} style={{ backgroundImage: `url(${lozaBg})` }}>
            <article className={styles.product}>
                <h1>Materiales para loza</h1>
                <div className={styles.content}>
                    <List title={"Mallas"} elements={["3,8 15X25", "5,5 15X25", "5,5 15X15"]} />
                    <List title={"Telgopor"} elements={["10cm", "12cm"]} />
                    <List title={"Vigueta"} elements={["2m", "3m", "3,4m", "3,6m", "4m", "4,4m", "4,6m", "5m"]} />
                </div>
            </article>
        </div>
    )
}

export const Cemento = () => {

    return (
        <div className={styles.productContainer} style={{ backgroundImage: `url(${cementoBg})` }}>
            <article className={styles.product}>
                <h1>Cemento</h1>
                <div className={styles.content}>
                    <List title={"Cemento"} elements={["Holcim", "Avellaneda"]} />
                    <List title={"Bolsón"} elements={["Arena", "Piedra"]} />
                    <List title={"Cal"} elements={["Común", "Hidratada extra"]} />
                </div>
            </article>
        </div>
    )
}

export const Ladrillos = () => {

    return (
        <div className={styles.productContainer} style={{ backgroundImage: `url(${ladrillosBg})` }}>
            <article className={styles.product}>
                <h1>Ladrillos</h1>
                <div className={styles.content}>
                    <List title={"Hueco"} elements={["8X18X33", "12X18X33-9T", "18X18X39 12T"]} />
                    <List title={"Portante"} elements={["12X19X39", "18X19X39"]} />
                    <List title={"Bloq Cemento"} elements={["13X19X39", "19X19X39"]} />
                    <List title={"Ladrillo común"} elements={[]} />
                </div>
            </article>
        </div>
    )
}

export const Hierros = () => {

    return (
        <div className={styles.productContainer} style={{ backgroundImage: `url(${hierrosBg})` }}>
            <article className={styles.product}>
                <h1>Hierros de construcción</h1>
                <div className={styles.content}>
                    <List title={"Hierro"} elements={["4", "6", "8", "10", "12", "16", "20"]} />
                </div>
            </article>
        </div>

    )
}

export const Weber = () => {

    return (
        <div className={styles.productContainer} style={{ backgroundImage: `url(${weberBg})` }}>
            <article className={styles.product}>
                <h1>weber</h1>
                <div className={styles.content}>
                    <List title={"Peg. Weber"} elements={["30kg"]} />
                    <List title={"Ceresita"} elements={["1lt", "4lt", "10lt", "20lt", "200lt"]} />
                </div>
            </article>
        </div>
    )
}