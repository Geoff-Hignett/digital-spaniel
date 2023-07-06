import RecentProjectsTabbed from "./RecentProjectsTabbed";

const RecentProjects = () => {
    return (
        <>
            <div className="recent-projects">
                <div className="container">
                    <h1><span className="text-dark">Some of our<br /></span>recent projects</h1>
                    <RecentProjectsTabbed />
                </div>
            </div>
        </>
    );
};

export default RecentProjects;
