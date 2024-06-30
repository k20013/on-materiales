import styles from './list.module.css';

const List = ({ title, elements }) => {

    return (
        <div className={styles.container}>

            <h3>{title}</h3>

            <ul>
                {elements.map((item) => (<li>{item}</li>))}
            </ul>

        </div>
    )
}
export default List;