import { useState } from "react";

type SkillCategory = {
  name: string;
  skills: string[];
};

type SkillsTabsProps = {
  categories: SkillCategory[];
};

function SkillsTabs({ categories }: SkillsTabsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  if (categories.length === 0) {
    return null;
  }

  const currentCategory = categories[activeCategory];

  return (
    <div className="skills-tabs">
      <div className="skills-tab-list">
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`skills-tab ${
              index === activeCategory ? "active" : ""
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="skills-tab-content">
        <div className="pill-list">
          {currentCategory.skills.map((skill) => (
            <span className="pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsTabs;