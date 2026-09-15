
import { ReactFlow } from "@xyflow/react"
import '@xyflow/react/dist/style.css'
import './Diagram.css'
import ActivityNode from "./ActivityNode"

export default function Diagram({activities}){

  
    const nodeTypes ={
        activity: ActivityNode
    } 
   
    const levels = {}
    const levelsPosition ={}

    const nodo = activities.map((activity,index)=>{

        let level;
        if(activity.predecessors.length === 0){
            level = 0 
            levels[activity.id]=level;
        }else{
          const selectProdecessorsNumber =  activity.predecessors.map((predecesor)=>{
                return levels[predecesor]
            })
            console.log(selectProdecessorsNumber)

           const higherLevel =selectProdecessorsNumber.reduce(( acumulador, number)=>{
                if(acumulador < number){
                    console.log('entra')
                    acumulador = number;
                    return acumulador
                }
                return acumulador
           }) 
           levels[activity.id] = higherLevel +1
           console.log(higherLevel +'este el nivel mayor')
        }
        console.log(levels)

        return{
            id: activity.id,
            position: {x:levels[activity.id] * 250,y:index *150},
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
        <section>

            <h2>Diagrama del proyecto</h2>
            

                <div id="diagram" className="content-diagram">
                <ReactFlow nodes={nodo} edges={edges} nodeTypes={nodeTypes}/>
                

                </div>
                    





        </section>
    )
}