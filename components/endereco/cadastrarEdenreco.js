import { useState } from "react"

export default function Edenreco() {
    const [estado, setEstado] = useState()
    const [rua, setRua] = useState()
    const [complemento, setComplemento] = useState()
    const [cep, setCep] = useState()
    const [cidade, setCidade] = useState()
    const [numeroRua, setNumeroRua] = useState()

    const enviarEndereco = () => {

    }
    return (
        <div className="flex flex-col">

            <div>
                <label>cep</label><br />
                <input type={'text'} placeholder='cep' onChange={e => setCep(e.target.value)} />
            </div>

            <div>
                <label>estado</label><br />
                <input type={'text'} placeholder='cidade' onChange={e => setEstado(e.target.value)} />
            </div>
            <div>
                <label>cidade</label><br />
                <input type={'text'} placeholder='cidade' onChange={e => setCidade(e.target.value)} />
            </div>

            <div>
                <label>rua</label><br />
                <input type={'text'} placeholder='rua' onChange={e => setRua(e.target.value)} />
            </div>
            <div>
                <label>numero Rua</label><br />
                <input type={'number'} placeholder='numero Rua' onChange={e => setNumeroRua(e.target.value)} />
            </div>
            <div>
                <label>complemento</label><br />
                <input type={'text'} placeholder='complemento' onChange={e => setComplemento(e.target.value)} />
            </div>




            <div className="bg-[green]"><button onClick={enviarEndereco}>adicionar Endereco</button></div>
        </div>
    )
}