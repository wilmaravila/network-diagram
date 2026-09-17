
import { ReactFlow } from "@xyflow/react"
import '@xyflow/react/dist/style.css'
import './Diagram.css'
import ActivityNode from "./ActivityNode"

export default function Diagram({activities}){

  
    const nodeTypes ={
        activity: ActivityNode
    } 
   
    const levels = {}
    //guarda el nivel y muestra cuantos hay en ese nivel
    const levelsPosition ={}

    const nodo = activities.map((activity)=>{
        
        let level;
        if(activity.predecessors.length === 0){
            level = 0 
            levels[activity.id]=level;
        }else{
          const selectProdecessorsNumber =  activity.predecessors.map((predecesor)=>{
                return levels[predecesor]
            })
            console.log('que sale aqui')
            console.log(selectProdecessorsNumber)

           const higherLevel =selectProdecessorsNumber.reduce(( acumulador, number)=>{
                if(acumulador < number){
                    console.log('entra')
                    acumulador = number;
                    return acumulador
                }
                return acumulador
           }) 
           level = higherLevel + 1
           levels[activity.id] = level
           
        }
        console.log(levels )
        console.log(levelsPosition )
        if(levelsPosition[level]===undefined){
             levelsPosition[level]= 0
        }
        const positionY = levelsPosition[level] *250;
       
        
        console.log(positionY)

        levelsPosition[level] += 1;

        return{
            id: activity.id,
            position: {x:levels[activity.id] * 250,y:positionY},
            type:"activity",
            data: {
                id: activity.id,
                name: activity.name,
                duration: activity.duration
            }

        
        }
    })

    const edges = activities.flatMap((activity)=>{
           return activity.predecessors.map((predecesor)=>{
                return{
                    id: `${activity.id}-${predecesor}`,
                    source: predecesor,
                    target: activity.id
                }
            })
    })
    
    console.log(edges)

  


    


  
    return(
        <section className="section-diagram">

            <h2>Diagrama del proyecto</h2>
            

            <div id="diagram" className="content-diagram">
                <ReactFlow className="react-flow" nodes={nodo} edges={edges} nodeTypes={nodeTypes}/>
                

            </div>
                    





        </section>
    )
}