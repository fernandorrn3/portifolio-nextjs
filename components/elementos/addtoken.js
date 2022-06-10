import {useState} from 'react'
export default function Addtoken({setclientid,setacesstoken}){

   
return(
    <>
    <div>
        <label>add ClientId</label><br/>
        <input type='text' placeholder="clientId" onMouseMove={e=>setclientid(e.target.value)}/><br/>


        <label>add acessToken</label><br/>
        <input type='text' placeholder="Acess token" onMouseMove={e=>setacesstoken(e.target.value)} />

        
    </div>
    </>
)
}