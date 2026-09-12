import Header from "./components/Header/Header"
import ProjectInfo from "./components/ProjectInfo/ProjectInfo"
import ActivityPanel from "./components/ActivityPanel/ActivityPanel"
import Diagram from "./components/Diagram/Diagram"
import Results from "./components/Results/Results"
import { useState } from "react"

function App() {

  const  [activities,setActivities] =useState([]);


  //funciones

  const addActivity = (newActivity) => {
    setActivities([...activities,newActivity])
  }

  const nuevaActividad = {
    id: "A1",
    name: "Diseño",
    duration: 5,
    predecessors: []
  }
  console.log(activities);
  
  



  return (
    <>
      <Header/>
      <main>
        <ProjectInfo/>
        <ActivityPanel addActivity ={addActivity}/>
        <Diagram/>
        <Results/>
      </main>
    </>
  )
}

export default App
