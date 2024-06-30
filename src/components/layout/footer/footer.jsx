import styles from './footer.module.css';

import { mailIcon, telIcon, facebookIcon, locationIcon, whatsappIcon } from '../../../assets/footer/export';

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.list}>
                <span>Contacto</span>
                <ul>
                    <li>
                        <img src={mailIcon} alt="mail icon" />
                        <span>onmaterialesventas@gmail.com</span>
                    </li>
                    <li>
                        <img src={telIcon} alt="telephone icon" />
                        <span>0220 501-2323</span>
                    </li>
                </ul>
            </div>

            <div className={styles.list}>
                <span>Redes</span>
                <ul>
                    <li>
                        <img src={facebookIcon} alt="facebook icon" />
                        <a href="https://www.facebook.com/people/On-Materiales/100079781769080/?_rdr" target='_blank'>Facebook</a>
                    </li>
                    <li>
                        <img src={whatsappIcon} alt="whatsapp icon" />
                        <a href="https://wa.me/+5491127503360" target='_blank'>whatsapp</a>
                    </li>
                </ul>
            </div>

            <div className={styles.list}>
                <span>Ubicación</span>
                <ul style={{ width: "50%" }}>
                    <li>
                        <img src={locationIcon} alt="" />
                        <span>AV. RICARDO BALBIN 4950 EX RUTA 200 KM 35, Merlo, Argentina, 1722</span>
                    </li>
                </ul>
            </div>

        </footer>
    )
}
export default Footer;