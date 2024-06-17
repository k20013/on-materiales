import styles from './products.module.css';

const Products = () => {

    return (
        <section className={styles.products}>

            <div className={styles.content}>
                <div>
                    <div className={styles.productThree}></div>
                </div>

                <div>
                    <div className={styles.productOne}></div>
                    <div className={styles.productTwo}></div>
                </div>

                <div>
                    <div className={styles.productTwo}></div>
                    <div className={styles.productOne}></div>
                </div>

            </div>

        </section>
    )
}
export default Products;