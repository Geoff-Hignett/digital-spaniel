import  React, { useState, useId, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetTestimonialsQuery } from "../../apiSlice";

const RecentProjectsTabbed = () => {
    const [categories, setCategories] = useState([		
        {
            name: "All",
            active: true,
        },
        {
            name: "Branding",
            active: false,
        },
        {
            name: "Web Design",
            active: false,
        },
        {
            name: "Digital Marketing",
            active: false,
        },
    ]);
    const {
        data: recentProjects,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTestimonialsQuery();

	const catLabelId = useId();
    
    const setCategoryActive = (catIndex) => {
        
        setCategories([ ...categories.map((category, index) => {
            index == catIndex ? category.active = true : category.active = false;
			return category;
		})])
	}
    
    const renderRecentProjects = () => {
        const activeCatName = categories.filter((category) => category.active)[0].name;
		let projectsToRender = recentProjects;
		if(activeCatName !== "All"){
			projectsToRender = recentProjects.filter((project) => project.categories.includes(activeCatName));
		}
        
        if (isLoading) {
            return (
                <h2>Loading...</h2>
        );
    } else if (isSuccess) {
        return (
            <>
                {projectsToRender.length === 0 ? (
                    "You have no recent Projects."
                    ) : (
                        projectsToRender.map((project, index) => (
                            <div className={`tabbed__grid-item ${project.imgType === "double" ? "tabbed__grid-item--double" : ""}`} key={index}>
                            <div className="tabbed__grid-item-content">
                                <h4 className="text-white">{project.name}</h4>
                                <p className="text-white">{project.description}</p>
                                <Link className="link link--white" to={`/projects/${project.name}`}>Full project</Link>
                            </div>
                            <img className="tabbed__grid-img" src={`./img/projects/${project.imgFolder}/recent.png`} alt="" />
                            <div className="tabbed__grid-overlay"></div>
                        </div>
                    ))
                )}
            </>
        );
    } else if (isError) {
        return <h2>{error}</h2>;
    }
}
    return (
        <>
            <div className="tabbed">
                <div className="tabbed__select-mob">
                    <label className="tabbed__label" htmlFor={catLabelId}>Select Category: </label>
                    <select className="tabbed__select" id={catLabelId} onChange={e => setCategoryActive(e.target.value)}>
                        {categories.map((category, index) => (
                            <option className="" key={index} value={index}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="tabbed__selectors">
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => setCategoryActive(index)} className={`tabbed__selector ${category.active ? "active" : "" }`}>{category.name}</button>
                    ))}
                </div>
                <div className="tabbed__grid">
                    {renderRecentProjects()}
                </div>
                <div className="tabbed__bottom">
                    <Link className="link" to="/">See all work</Link>
                    <div className="tabbed__switches">
                        <button className="tabbed__switch tabbed__switch--left"></button>
                        <button className="tabbed__switch tabbed__switch--right"></button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RecentProjectsTabbed;
