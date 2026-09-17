import './ActivityList.css'

export default function ActivityList({activities}){
    return(
        <div className="content-activity-list">
            <h2>Actividades creadas {activities.length}</h2>
            {activities.map((activity) =>
                
                <div key={activity.id}>
                    <p>ID: {activity.id}</p>
                    <p>NOMBRE ACTIVIDAD: {activity.name}</p>
                    <p>DURACION ACTIVIDAD: {activity.duration}</p>

                    <p>PREDECESOR:
                        {activity.predecessors}
                    </p>
                </div>
                
            )}
        
        
        
        </div>
    )
}