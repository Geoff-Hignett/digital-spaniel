import { Link } from "react-router-dom";
import styles from './Expertise.module.scss';

const Expertise = () => {
    const expertiseGroups = [
        {
            name: "Brand",
            items: ["Brand Strategy", "Logo & Name", "Identify & Collateral"],
        },
        {
            name: "Marketing",
            items: ["Digital", "Market Research"],
        },
        {
            name: "Development",
            items: ["eCommerce", "Web Development", "Mobile Apps"],
        },
    ];

    const renderExpertiseGroups = () => {
        return expertiseGroups.map((group, index) => (
            <div key={index} className={styles.expertise__group}>
                <h5>{group.name}</h5>
                <ul className={styles.expertise__group_list}>
                    {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <Link key={itemIndex} to="/">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <>
            <div className="bg-lightgrey">
                <div className="container">
                    <div className={styles.expertise}>
                        <div className={styles.expertise__left}>
                            <div>
                                <h1><span className="text-dark">What are<br /></span>we capable of</h1>
                                <p className={styles.expertise__para}> By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>
                            </div>
                            <Link className="link" to="/">
                                Our process
                            </Link>
                        </div>
                        <div className={styles.expertise__right}>
                            <div className={styles.expertise__groups}>
                                {renderExpertiseGroups()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Expertise;
