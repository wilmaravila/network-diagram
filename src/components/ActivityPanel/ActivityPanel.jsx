import ActivityList from "./ActivityList/ActivityList";
import ActivityForm from "./ActivityForm/ActivityForm";

export default function ActivityPanel({addActivity}){
    return(
        <section>
            <ActivityForm addActivity ={addActivity}/>
            <ActivityList/>
        
        </section>
    )

}