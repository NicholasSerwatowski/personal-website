import { useState } from "react";
import type { School } from "../../../data/experience/education";

interface EducationTabsProps {
  school: School;
}

type MainTab = "activities" | "classes" | "awards";

function EducationTabs({ school }: EducationTabsProps) {
  const [activeTab, setActiveTab] =
    useState<MainTab>("activities");

  const years = school.classYears ?? [];

  const [activeYear, setActiveYear] = useState(
    years[0]?.label ?? ""
  );

  const selectedYear = years.find(
    (year) => year.label === activeYear
  );

  return (
    <div className="education-tabs">

      {/* Main tabs */}
      <div className="education-tab-buttons">
        <button
          className={activeTab === "activities" ? "active" : ""}
          onClick={() => setActiveTab("activities")}
        >
          Activities
        </button>

        <button
          className={activeTab === "classes" ? "active" : ""}
          onClick={() => setActiveTab("classes")}
        >
          Classes
        </button>

        <button
          className={activeTab === "awards" ? "active" : ""}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </button>
      </div>

      {/* =========================
          ACTIVITIES
          ========================= */}

      {activeTab === "activities" && (
        <div className="education-tab-content">

          {school.activities?.length ? (
            <div className="education-list">

              {school.activities.map((activity) => (
                <article
                  className="education-item"
                  key={activity.name}
                >
                  <div className="education-item-header">
                    <div>
                      <h3>{activity.name}</h3>

                      {activity.role && (
                        <p className="education-item-role">
                          {activity.role}
                        </p>
                      )}
                    </div>

                    {activity.years && (
                      <span className="education-item-date">
                        {activity.years}
                      </span>
                    )}
                  </div>

                  {activity.description && (
                    <p className="education-item-description">
                      {activity.description}
                    </p>
                  )}
                </article>
              ))}

            </div>
          ) : (
            <p className="education-empty">
              No activities listed yet.
            </p>
          )}

        </div>
      )}

      {/* =========================
          CLASSES
          ========================= */}

      {activeTab === "classes" && (
        <div className="education-tab-content">

          {years.length > 0 && (
            <div className="education-year-tabs">

              {years.map((year) => (
                <button
                  key={year.label}
                  className={
                    activeYear === year.label
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveYear(year.label)
                  }
                >
                  {year.label}
                </button>
              ))}

            </div>
          )}

          {selectedYear?.courses.length ? (
            <div className="course-list">

              {selectedYear.courses.map(
                (course, index) => (
                  <article
                    className="course-item"
                    key={`${course.code}-${index}`}
                  >
                    <div className="course-main">

                      <span className="course-code">
                        {course.code}
                      </span>

                      <h3>{course.name}</h3>

                    </div>

                    <div className="course-details">

                      <span>
                        {course.semester}
                      </span>

                      {course.grade && (
                        <span className="course-grade">
                          {course.grade}
                        </span>
                      )}

                    </div>
                  </article>
                )
              )}

            </div>
          ) : (
            <p className="education-empty">
              No classes listed for this year.
            </p>
          )}

        </div>
      )}

      {/* =========================
          AWARDS
          ========================= */}

      {activeTab === "awards" && (
        <div className="education-tab-content">

          {school.awards?.length ? (
            <div className="education-list">

              {school.awards.map((award) => (
                <article
                  className="education-item"
                  key={award.name}
                >
                  <div className="education-item-header">

                    <h3>{award.name}</h3>

                    {award.date && (
                      <span className="education-item-date">
                        {award.date}
                      </span>
                    )}

                  </div>

                  {award.description && (
                    <p className="education-item-description">
                      {award.description}
                    </p>
                  )}

                </article>
              ))}

            </div>
          ) : (
            <p className="education-empty">
              No awards listed yet.
            </p>
          )}

        </div>
      )}

    </div>
  );
}

export default EducationTabs;