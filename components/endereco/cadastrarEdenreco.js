import { useState, useEffect, useRef } from "react"
import { inserirEndereco } from "../../reducer/reducerEndereco"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { pegarEndereco } from "../../reducer/reducerEndereco"
export default function Edenreco(props) {
    const dispatch = useDispatch()
    const [estado, setEstado] = useState()
    const [rua, setRua] = useState()
    const [complemento, setComplemento] = useState()
    const [cep, setCep] = useState()
    const [cidade, setCidade] = useState()
    const [numeroRua, setNumeroRua] = useState()
    const endereco = useSelector((elemento) => elemento.reducerEndereco.endereco)
    const enderecoError = useSelector((elemento) => elemento.reducerEndereco.error)
    const statusEndereco = useSelector((elemento) => elemento.reducerEndereco.status)
    const [editEndereco,setEditEndereco] = useState(false)
    const cepref = useRef()
    const estadoref = useRef()
    const cidaderef = useRef()
    const ruaref = useRef()
    const numeroref = useRef()
    const complementoref = useRef()
    useEffect(() => {
        if (statusEndereco === 'iddle') {
            dispatch(pegarEndereco(props.usuario))
        }
    }, [statusEndereco, dispatch])

    const enviarEndereco = async (e) => {
        const data = {
            usuario: props.usuario,
            criado: e.target.name,
            estado: estado,
            rua: rua,
            complemento: complemento,
            cep: cep,
            cidade: cidade,
            numeroRua: numeroRua
        }

        dispatch(inserirEndereco(data))

    }

    const liberarEdicao = () => {
        setEditEndereco(true)
       
console.log(cepref.current.disabled)
        cepref.current.disabled = false
        estadoref.current.disabled = false
        cidaderef.current.disabled = false
        ruaref.current.disabled = false
        numeroref.current.disabled = false
        complementoref.current.disabled = false
    }

    const salvarEditEndereco = () =>{
        setEditEndereco(false)
        const data = {
            usuario: props.usuario,
            criado: e.target.name,
            estado: estado,
            rua: rua,
            complemento: complemento,
            cep: cep,
            cidade: cidade,
            numeroRua: numeroRua
        }

        dispatch(inserirEndereco(data))
    }

    return (
        <div className="flex flex-col">
            {enderecoError &&
                <p>{enderecoError}</p>
            }
            <div>
                <label>cep</label><br />
                {editEndereco == true &&
                <input type={'text'} placeholder='cep' ref={cepref} onChange={e => setCep(e.target.value)} />
                }
                {endereco[0] != undefined && editEndereco == false &&
                
                    <input type={'text'} placeholder='cep' value={endereco[0].endereco.cep} onChange={e => setCep(e.target.value)} ref={cepref} disabled />
                 
                }
                {endereco[0] == undefined &&
                    <input type={'text'} placeholder='cep' onChange={e => setCep(e.target.value)} />
                }


            </div>

            <div>
                <label>estado</label><br />
                {endereco[0] != undefined &&
                    <input type={'text'} placeholder='cidade' value={endereco[0].endereco.estado} onChange={e => setEstado(e.target.value)} ref={estadoref} disabled />
                }
                {endereco[0] == undefined &&
                    <input type={'text'} placeholder='cidade' onChange={e => setEstado(e.target.value)} />
                }

            </div>
            <div>
                <label>cidade</label><br />
                {endereco[0] != undefined &&
                    <input type={'text'} placeholder='cidade' value={endereco[0].endereco.cidade} onChange={e => setCidade(e.target.value)} ref={cidaderef} disabled />
                }
                {endereco[0] == undefined &&
                    <input type={'text'} placeholder='cidade' onChange={e => setCidade(e.target.value)} />
                }

            </div>

            <div>
                <label>rua</label><br />
                {endereco[0] != undefined &&
                    <input type={'text'} placeholder='rua' value={endereco[0].endereco.rua} onChange={e => setRua(e.target.value)} ref={ruaref} disabled />
                }
                {endereco[0] == undefined &&
                    <input type={'text'} placeholder='rua' onChange={e => setRua(e.target.value)} />
                }

            </div>
            <div>
                <label>numero Rua</label><br />
                {endereco[0] != undefined &&
                    <input type={'number'} placeholder='numero Rua' value={endereco[0].endereco.numeroRua} onChange={e => setNumeroRua(e.target.value)} ref={numeroref} disabled />
                }
                {endereco[0] == undefined &&
                    <input type={'number'} placeholder='numero Rua' onChange={e => setNumeroRua(e.target.value)} />
                }

            </div>
            <div>
                <label>complemento</label><br />
                {endereco[0] != undefined &&
                    <input type={'text'} placeholder='complemento' value={endereco[0].endereco.complemento} onChange={e => setComplemento(e.target.value)} ref={complementoref} disabled />
                }
                {endereco[0] == undefined &&
                    <input type={'text'} placeholder='complemento' onChange={e => setComplemento(e.target.value)} />
                }

            </div>
            {endereco[0] != undefined &&
                <div className="bg-[green]"><button onClick={liberarEdicao} name='endereco' >Editar Endereco</button></div>
            }
            {endereco[0] == undefined &&
                <div className="bg-[green]"><button onClick={enviarEndereco} name='endereco' >adicionar Endereco</button></div>
            }
{editEndereco &&
 <div className="bg-[yellow]"><button onClick={salvarEditEndereco} name='endereco' >adicionar Endereco</button></div>
}
        </div>
    )
}