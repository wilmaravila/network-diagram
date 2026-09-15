import Header from "./components/Header/Header"
import ProjectInfo from "./components/ProjectInfo/ProjectInfo"
import ActivityPanel from "./components/ActivityPanel/ActivityPanel"
import Diagram from "./components/Diagram/Diagram"
import Results from "./components/Results/Results"
import {  useState } from "react"

function App() {

  const  [activities,setActivities] =useState([]);
  const [nextId,setNextId] = useState(1);
 

  //funciones

  const addActivity = (newActivity) => {

    const activityWithId ={
      ...newActivity,
      id: "A"+nextId
    }


    
    setNextId(nextId + 1)

    setActivities([...activities,activityWithId])
  }

 
 
  



  return (
    <>
      <Header/>
      <main>
        <ProjectInfo/>
        <ActivityPanel addActivity ={addActivity} activities={activities}/>
        <Diagram activities={activities}/>
        <Results/>
      </main>
    </>
  )
}

export default App
