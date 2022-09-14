import Sidebar from "./sidebar"
import Fotter from "./footer"
export default function Layoutpp({children}){
    return(
        <>
        <div className="flex flex-row">
<Sidebar/>
{children}
        </div>
        <Fotter/>
        </>
    )
}