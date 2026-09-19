import './ProjectInfo.css'
export default function ProjectInfo(){
    return(
        <div className="content-info-project">
            <form action="">
                <div className='content-inputs'>
                    <label htmlFor="projectName">Nombre del Proyecto</label>
                    <input type="text" name="projectName" id="projectName" />

                </div>
                <div className='content-inputs'>

                    <label htmlFor="description">Descripción del proyecto</label>
                    <textarea name="description" id="description"></textarea>   
                </div>



            </form>
        
        
        
        
        </div>
    )
}