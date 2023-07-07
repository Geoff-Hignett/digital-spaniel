import { Link } from "react-router-dom";
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__wrapper}>
                    <div className={styles.hero__left}>
                        <div>
                            <p className={styles.hero__prehead}>
                                Brand, Dev, Ecom, Marketing
                            </p>
                            <h1>
                                <span className="text-dark">
                                    We unleash
                                    <br />
                                </span>
                                business potential
                            </h1>
                            <p className={styles.hero__para}>
                                We create brand experiences which are memorable
                                and distinct. Our experienced team create and
                                develop brands with personality and resonance.
                            </p>
                        </div>
                        <Link className="link" to="/">
                            Lets' talk
                        </Link>
                    </div>
                    <div className={styles.hero__right}>
                        <img src="./img/home/hero.png" alt="" />
                    </div>
                </div>
                <img className={styles.hero__right_mob} src="./img/home/hero.png" alt="" />
            </div>
        </>
    );
};

export default Hero;
