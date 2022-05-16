import {useState,useEffect} from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import List from '../List';




const  ProjectDetails = ({userName}) => {

    const [loading,setLoading] = useState(true)
    const [projects,setProject] = useState([])

    const {name} = useParams()



    useEffect(() =>{

        async function fetchData(){

            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`)


            const result = await data.json()



            if(result){
                setProject(result)
                setLoading(false)
            }

            console.log(projects)
        }

        if(userName && name){fetchData()}
    },[userName,name])






    return(
        <div className="project-container">
            <h2>Project:{projects.name}</h2>
            {loading ? (
                <div>...loading</div>
            ):(
      
                <div>
                     <ul>
                        

                            <li>{projects.issues_url}</li>

                      
                     </ul>
                </div>
     
    )}
    </div>
    )}



export default ProjectDetails