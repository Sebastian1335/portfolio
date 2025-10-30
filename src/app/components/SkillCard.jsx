export const SkillCard = ({skill, index}) => {
    return (
        <div key={index} className="skill-card">
            <h3>
                {skill.icon} {skill.name}
            </h3>
            <div className="skill-tags">
                <span className="tag level-tag">{skill.level}</span>
                <span className="tag category-tag">{skill.category}</span>
            </div>
        </div>
    );
};
