import styles from './about.module.css';

import onIcon from '../../../../public/on.svg';
import brandsArray from '../../../assets/brands/export';

const About = () => {

    return (
        <section className={styles.about}>

            <div className={styles.brands}> {/* Marcas */}
                {brandsArray.map((item) => {
                    return (<img src={item} alt="" />)
                })}
            </div>

            <div> {/* competencias */}

            </div>

            <div className={styles.content}>
                <div> {/* Icono */}
                    <img src={onIcon} className={styles.principalIcon} alt="Icono de materiales on" />
                </div>

                <div> {/* presentación */}
                    <p></p>
                </div>
            </div>



        </section>
    )
}
export default About;