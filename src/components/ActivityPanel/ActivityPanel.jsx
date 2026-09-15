import ActivityList from "./ActivityList/ActivityList";
import ActivityForm from "./ActivityForm/ActivityForm";

export default function ActivityPanel({addActivity, activities}){
    return(
        <section>
            <ActivityForm addActivity ={addActivity} activities ={activities} />
            <ActivityList activities ={activities}/>
        
        </section>
    )

}