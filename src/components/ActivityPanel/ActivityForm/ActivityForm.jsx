export default function ActivityForm({addActivity}){

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(event.tarjet);
        const activityName = event.tarjet.name.value;
        const activityDuration = event.tarjet.duration.value;
        console.log(activityDuration);
        console.log(activityName);

    }


    return(

        <>
            <h2>Actividades</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="activityName">Nombre de la Tarea</label>
                <input type="text" name="name" id="activityName" />
                <label htmlFor="duration" > Duracion </label>
                <input type="number" name="duration" id="duration" />
                <label htmlFor="predecessors">Predecesores</label>
                <select name="predecessors" id="predecessors" multiple>

                    <option></option>
                </select>


                <button type="submit">Agregar actividad</button>
            </form>



        
        
        
        
        </>
    )
}