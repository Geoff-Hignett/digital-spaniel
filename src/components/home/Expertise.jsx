import { Link } from "react-router-dom";

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
            <div key={index} className="expertise__group">
                <h5 className="expertise__group-name">{group.name}</h5>
                <ul className="expertise__group-list">
                    {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <Link>{item}</Link>
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
                    <div className="expertise">
                        <div className="expertise__left">
                            <div>
                                <h1><span className="text-dark">What are<br /></span>we capable of</h1>
                                <p className="expertise__para"> By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>
                            </div>
                            <Link className="link" to="/">
                                Our process
                            </Link>
                        </div>
                        <div className="expertise__right">
                            <div className="expertise__groups">
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
