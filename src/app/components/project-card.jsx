export const Projectcard = ({project, index}) => {
    return (
        <div key={index} className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        Demo
                    </a>
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
};
