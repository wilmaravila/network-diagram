import './ActivityForm.css'


export default function ActivityForm({addActivity,activities}){

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        
        const activityName = event.target.activityName.value;
        const activityDuration = Number(event.target.duration.value);
       
        const checkboxes = event.target.querySelectorAll('input[type="checkbox"]')
        const selectedCheckboxes = Array.from(checkboxes).filter((checkbox) => {
            return checkbox.checked;
        });
        const selectedActivities = selectedCheckboxes.map(checkbox => checkbox.value)

        
        const newActivity ={
            name: activityName,
            duration: activityDuration,
            predecessors: selectedActivities
        }
        addActivity(newActivity)
        event.target.reset();
    }


    return(

        <div className='content-activity-form'>
            <div className='content-title'>
                <h2>Actividades </h2>
                <div className='content-total'>
                    <p>Total: {activities.length}</p>

                </div>
            </div>
            <div className='content-form'>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="activityName">Nombre de la Tarea</label>
                    <input type="text" name="activityName" id="activityName" className='input-fixed' />
                    <label htmlFor="duration" > Duracion </label>
                    <input type="number" name="duration" id="duration" className='input-fixed' />
                    <label htmlFor="predecessors">Predecesores</label>
                    <div className='content-predecessors'>

                        {activities.map((activity)=>
                        <label key={activity.id}>
                            <input  type="checkbox" value={activity.id}/>{activity.id}
                            
                        </label>
                        )}
                    </div>


                    <button className='button-add-activity'>Agregar actividad</button>
                </form>
            </div>



        
        
        
        
        </div>
    )
}