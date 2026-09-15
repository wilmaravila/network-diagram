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

        <>
            <h2>Actividades</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="activityName">Nombre de la Tarea</label>
                <input type="text" name="activityName" id="activityName" />
                <label htmlFor="duration" > Duracion </label>
                <input type="number" name="duration" id="duration" />
                <label htmlFor="predecessors">Predecesores</label>

                {activities.map((activity)=>
                <label key={activity.id}>
                    <input  type="checkbox" value={activity.id}/>{activity.id}
                    
                </label>
                )}


                <button >Agregar actividad</button>
            </form>



        
        
        
        
        </>
    )
}