import './ActivityList.css'

export default function ActivityList({activities}){
    return(
        <div className="content-activity-list">
            <div className='content-title'>
           
                <div className='content-title-activity'>

                    <h2 className='title-activity'>Actividades creadas {activities.length}</h2>
                </div>
            
            </div>
            <div className='content-list'>

            

                 {activities.map((activity) =>
                
                <div key={activity.id} className='content-activity'>
                    <div className='content-info-activity'>
                        <div className='content-info'>

                        <p>ID: {activity.id}</p>
                        <p> {activity.name}</p>
                        </div>
                        <div className='content-alert'>

                        </div>
                        <div className='content-button'> 
                         <button className='button-edit'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#ffffff"></path> </g></svg>
                         </button>
                         <button className='button-delete'>
                            <svg fill="#ff0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="delete-alt" class="icon glyph" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z"></path><path d="M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2ZM11,17a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z"></path></g></svg>
                         </button>
                        </div>

                    </div>
                    <div className='content-info-activity'>

                        <p>DURACION : {activity.duration}</p>

                        <p>PREDECESOR:  {activity.predecessors.length ===0? "Ninguno": activity.predecessors}
                        </p>
                    </div>
                </div>
                
                )}
            </div>
            
        
        
        
        </div>
    )
}