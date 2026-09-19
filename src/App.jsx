import Header from "./components/Header/Header"
import ProjectInfo from "./components/ProjectInfo/ProjectInfo"
import ActivityPanel from "./components/ActivityPanel/ActivityPanel"
import Diagram from "./components/Diagram/Diagram"
import Results from "./components/Results/Results"
import {  useState } from "react"
import './App.css'

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
    <div className="content-app">
     <header className="content-header">

      <Header/>
      <ProjectInfo/>
     </header>
      <main>
        <div className="content-activities-diagram">
          <ActivityPanel addActivity ={addActivity} activities={activities}/>
          <div>
            
          <Diagram activities={activities}/>
           <Results/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
