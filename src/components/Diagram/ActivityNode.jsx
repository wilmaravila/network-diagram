import { Handle,Position } from "@xyflow/react"

export default function ActivityNode({data}){

return(
    <div>
        <Handle type="target" position={Position.Left}/>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.duration}d</p>
         <Handle type="source" position={Position.Right}/>



    </div>


)


}