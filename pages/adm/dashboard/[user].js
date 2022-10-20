import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'



function Paineladm() {
 
  const estado = useSelector((state) => state.menuReducer)
  
  



  return(
   
 <div className="min-h-screen w-full">

     
     {estado.estado 
     ?<div className='bg-[blue] h-full ml-[220px] transition-all duration-700'> 


        <Botaomenu />
      
      <h1>dashboard page</h1>
     
      
    
     </div>

     :<div className='bg-[blue] h-full ml-[0] transition-all duration-700'>
<Botaomenu />
      
      <h1>dashboard page</h1>
    
      
      
     </div>
      }
    
    
    </div>
   

    
   
    
  )
}


 



Paineladm.getLayout = function getLayout(page){
 
  return(
    <Layoutpanel>
      
    {page}
  </Layoutpanel>
  )
 
}
Paineladm.auth = true
export default  Paineladm


