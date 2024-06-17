import styles from './navBar.module.css';

const NavBar = () => {

    return(
        <nav className={styles.navContainer}>

            <div className={styles.contacto}>
                Contactanos
            </div>

            <div className={styles.sections}>
                <span>Inicio</span>
                <span>Productos</span>
                <span>Sobre nosotros</span>
            </div>

        </nav>
    )
}
export default NavBar;