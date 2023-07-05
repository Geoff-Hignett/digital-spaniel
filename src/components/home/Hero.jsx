import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__left">
                        <div>
                            <p className="hero__prehead text-upper text-red">
                                Brand, Dev, Ecom, Marketing
                            </p>
                            <h1>
                                <span className="text-dark">
                                    We unleash
                                    <br />
                                </span>
                                business potential
                            </h1>
                            <p className="hero__para">
                                We create brand experiences which are memorable
                                and distinct. Our experienced team create and
                                develop brands with personality and resonance.
                            </p>
                        </div>
                        <Link className="btn-primary" to="/">
                            Lets' talk
                        </Link>
                    </div>
                    <div className="hero__right">
                        <img src="./img/hero.png" alt="" />
                    </div>
                </div>
                <img className="hero__right-mob" src="./img/hero.png" alt="" />
            </div>
        </>
    );
};

export default Hero;
