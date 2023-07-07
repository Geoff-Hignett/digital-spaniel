import { useState, useId } from "react";
import { Link } from "react-router-dom";
import { useGetRecentProjectsQuery } from "../../../apiSlice";
import styles from './TabbedMosaic.module.scss';

const RecentProjectsTabbed = () => {
    type Project = {
        id: number,
        name: string,
        description: string,
        imgFolder: string,
        categories: Array<string>
    }
    const [categories, setCategories] = useState([		
        {
            id: 1,
            name: "All",
            active: true,
        },
        {
            id: 2,
            name: "Branding",
            active: false,
        },
        {
            id: 3,
            name: "Web Design",
            active: false,
        },
        {
            id: 4,
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
    } = useGetRecentProjectsQuery();

	const catLabelId = useId();
    
    const setCategoryActive = (catIndex : number) => {
        
        setCategories([ ...categories.map((category, index) => {
            index == catIndex ? category.active = true : category.active = false;
			return category;
		})])
	}
    
    const decrementCategoryActive = () => {
        if(categories[0].active) return;
        let currentActive = categories.filter((category) => category.active)[0].id;

        setCategories([ ...categories.map((category, index) => {
            index + 2 == currentActive ? category.active = true : category.active = false;
			return category;
		})])
	}
    
    const incrementCategoryActive = () => {
        if(categories[categories.length - 1].active) return;
        let currentActive = categories.filter((category) => category.active)[0].id;

        setCategories([ ...categories.map((category, index) => {
            index == currentActive ? category.active = true : category.active = false;
			return category;
		})])
	}
    
    const renderRecentProjects = () => {
        const activeCatName = categories.filter((category) => category.active)[0].name;
		let projectsToRender = recentProjects;
		if(activeCatName !== "All"){
			projectsToRender = recentProjects.filter((project : Project) => project.categories.includes(activeCatName));
		}
        
        if (isLoading) {
            return (
                <h2>Loading...</h2>
            );
        } else if (isSuccess) {
            return (
                <>
                    {projectsToRender.length === 0 ? (
                        "You have no recent projects."
                        ) : (
                            projectsToRender.map((project : Project, index : number) => (
                                <div className={`${styles.tabbed_mosaic__grid_item}  ${index === 3 ? styles.tabbed_mosaic__grid_item__double : ""}`} key={index}>
                                    <div className={styles.tabbed_mosaic__grid_item_content}>
                                        <h4 className="text-white">{project.name}</h4>
                                        <p className="text-white">{project.description}</p>
                                        <Link className="link link--white" to={`/projects/${project.name}`}>Full project</Link>
                                    </div>
                                    <img className={styles.tabbed_mosaic__grid_img} src={`./img/projects/${project.imgFolder}/recent.png`} alt="" />
                                    <div className={styles.tabbed_mosaic__grid_overlay}></div>
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
            <div className={styles.tabbed_mosaic}>
                <div className={styles.tabbed_mosaic__select_mob}>
                    <label className={styles.tabbed_mosaic__label} htmlFor={catLabelId}>Select Category: </label>
                    <select className={styles.tabbed_mosaic__select} id={catLabelId} onChange={e => setCategoryActive(Number(e.target.value))}>
                        {categories.map((category, index) => (
                            <option className="" key={index} value={index}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.tabbed_mosaic__selectors}>
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => setCategoryActive(index)} className={`${styles.tabbed_mosaic__selector} ${category.active ? styles.tabbed_mosaic__selector_active : "" }`}>{category.name}</button>
                    ))}
                </div>
                <div className={styles.tabbed_mosaic__grid}>
                    {renderRecentProjects()}
                </div>
                <div className={styles.tabbed_mosaic__bottom}>
                    <Link className="link" to="/">See all work</Link>
                    <div className={styles.tabbed_mosaic__switches}>
                        <button onClick={decrementCategoryActive} className={`${styles.tabbed_mosaic__switch} ${styles.tabbed_mosaic__switch__left}`}></button>
                        <button onClick={incrementCategoryActive} className={`${styles.tabbed_mosaic__switch} ${styles.tabbed_mosaic__switch__right}`}></button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RecentProjectsTabbed;
