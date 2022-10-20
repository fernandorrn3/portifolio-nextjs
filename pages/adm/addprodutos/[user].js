import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import Formaddproduto from "../../../components/addProduto/addproduto"
import Page from "../../page"
function Addproduto() {
  const [styleMenu, setStyle] = useState('h-full ml-[220px] transition-all duration-700')
  const router = useRouter()
  const estado = useSelector((state) => state.menuReducer)


  useEffect(() => {
    if (estado.estado) {
      setStyle('ml-[220px] w-full transition-all duration-700 ')
    } else {
      setStyle('bg-[blue] ml-[0] w-full transition-all duration-700 ')
    }
    console.log(styleMenu)
  }, [estado])


  
 
    return (
      <div className={styleMenu} id='addProdutosId'>
        <Botaomenu />
        <Formaddproduto />
      </div>
    )
  


}

Addproduto.getLayout = function getLayout(page) {
  return (
    <Layoutpanel>

      {page}
    </Layoutpanel>
  )
}
Addproduto.auth = true
export default Addproduto


