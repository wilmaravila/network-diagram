import ActivityList from "./ActivityList/ActivityList";
import ActivityForm from "./ActivityForm/ActivityForm";
import './ActivityPanel.css'

export default function ActivityPanel({addActivity, activities}){
    return(
        <section className="content-activities">
            <ActivityForm  addActivity ={addActivity} activities ={activities} />
            <ActivityList activities ={activities}/>
        
        </section>
    )

}