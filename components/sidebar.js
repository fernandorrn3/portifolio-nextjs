import MenuElemento from "./elementos/menuElemento"
import { useSelector } from 'react-redux'
export default function Sidebar(valor){

  const estado = useSelector((state) => state.menuReducer)
  

  
    return(
<div>

{estado.estado? 

<div className="w-[220px] transition-all duration-700  h-full flex-col   bg-[red] fixed overflow-x-hidden left-0 top-0 ">
    
    <MenuElemento/>
    
     
     </div>

:

<div className="w-[0]   transition-all duration-700 flex-col h-full bg-[red] fixed overflow-x-hidden left-0 top-0 ">
    
<MenuElemento/>
     
     </div>
     
     }

  
    </div>
    )
}