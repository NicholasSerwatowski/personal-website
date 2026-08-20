import type { Activity } from "../data/education";

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
  if (activities.length === 0) {
    return (
      <div className="education-empty">
        <p>No activities listed yet.</p>
      </div>
    );
  }

  return (
    <div className="education-list">
      {activities.map((activity, index) => (
        <article className="education-item" key={`${activity.name}-${index}`}>
          <div className="education-item-header">
            <div>
              <h3>{activity.name}</h3>

              {activity.role && (
                <p className="education-item-role">{activity.role}</p>
              )}
            </div>

            {activity.dates && (
              <span className="education-item-date">
                {activity.dates}
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
  );
};

export default ActivityList;