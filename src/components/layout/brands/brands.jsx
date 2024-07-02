import styles from './brand.module.css';

import brandsArray from '../../../assets/brands/export';

const Brands = () => {

    return (
        <div className={styles.container}>

            <span>Acompañados por las mejores marcas:</span>

            <div className={styles.images}>
                {brandsArray.map((item) => {
                    return (<img src={item}></img>)
                })}
            </div>

        </div>
    )
}
export default Brands