import TabbedMosaic from "../tabbedMosaic/TabbedMosaic";
import styles from './RecentProjects.module.scss';

const RecentProjects = () => {
    return (
        <>
            <div className={styles.recent_projects}>
                <div className="container">
                    <h1><span className="text-dark">Some of our<br /></span>recent projects</h1>
                    <TabbedMosaic />
                </div>
            </div>
        </>
    );
};

export default RecentProjects;
