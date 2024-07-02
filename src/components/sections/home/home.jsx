import styles from './home.module.css';

const Home = () => {

    return(
        <section className={styles.home}>

            <div className={styles.content}>
            <h1>On materiales</h1>

                <div className={styles.subTitle}>
                    <span>10 años en la distribución de materiales de construcción de alta calidad</span>
                </div>
            </div>

        </section>
    )
}
export default Home;