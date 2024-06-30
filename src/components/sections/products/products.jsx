import styles from './products.module.css';

import { Loza, Cemento, Ladrillos, Hierros, Weber } from './product/product';

const Products = () => {

    return (
        <section className={styles.products}>

            <Loza />
            <Cemento />
            <Ladrillos />
            <Hierros />
            <Weber />

        </section>
    )
}
export default Products;