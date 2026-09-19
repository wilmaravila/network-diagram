import './ActivityList.css'

export default function ActivityList({activities}){
    return(
        <div className="content-activity-list">
            <div className='content-title'>
           
                <div className='content-title-activity'>

                    <h2 className='title-activity'>Actividades creadas {activities.length}</h2>
                </div>
            
            </div>
            {activities.map((activity) =>
                
            <div key={activity.id} className='content-activity'>
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