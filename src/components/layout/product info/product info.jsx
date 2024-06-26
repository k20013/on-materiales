import styles from './product info.module.css';

const ProductInfo = ({ producto, medidas }) => {

    return (
        <div className={styles.container}>

            <h3>{producto}</h3>

            <ul>
                {medidas.map((item) => (<li>{item}</li>))}
            </ul>

        </div>
    )
}
export default ProductInfo;