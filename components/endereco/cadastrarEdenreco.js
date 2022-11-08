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
    const [editEndereco, setEditEndereco] = useState(false)
    const cepref = useRef()
    const estadoref = useRef()
    const cidaderef = useRef()
    const ruaref = useRef()
    const numeroref = useRef()
    const complementoref = useRef()
    useEffect(()=>{
console.log(endereco)
    },[endereco])
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

        editEndereco ? setEditEndereco(false) : setEditEndereco(true)
        console.log(editEndereco)
        cepref.current.disabled = false
        estadoref.current.disabled = false
        cidaderef.current.disabled = false
        ruaref.current.disabled = false
        numeroref.current.disabled = false
        complementoref.current.disabled = false
    }

    const salvarEditEndereco = (e) => {
        setEditEndereco(false)
        console.log(editEndereco)
        const data = {
            usuario: endereco.userId,
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
                {Object.keys(endereco).length > 0 && editEndereco == false &&

                    <input type={'text'} placeholder='cep' value={endereco.cep} ref={cepref} disabled />

                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'text'} placeholder='cep'  onChange={e => setCep(e.target.value)} />
                }


            </div>

            <div>
                <label>estado</label><br />
                {editEndereco == true &&
                    <input type={'text'} placeholder='cidade' onChange={e => setEstado(e.target.value)} ref={estadoref} />
                }
                {Object.keys(endereco).length > 0 && editEndereco == false &&
                    <input type={'text'} placeholder='cidade' value={endereco.estado}  ref={estadoref} disabled />
                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'text'} placeholder='cidade' onChange={e => setEstado(e.target.value)} />
                }

            </div>
            <div>
                <label>cidade</label><br />
                {editEndereco == true &&
                    <input type={'text'} placeholder='cidade' onChange={e => setCidade(e.target.value)} ref={cidaderef} />
                }
                {Object.keys(endereco).length > 0 && editEndereco == false &&
                    <input type={'text'} placeholder='cidade' value={endereco.cidade}  ref={cidaderef} disabled />
                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'text'} placeholder='cidade' onChange={e => setCidade(e.target.value)} />
                }

            </div>

            <div>
                <label>rua</label><br />
                {editEndereco == true &&
                    <input type={'text'} placeholder='rua' onChange={e => setRua(e.target.value)} ref={ruaref} />
                }
                {Object.keys(endereco).length > 0 && editEndereco == false &&
                    <input type={'text'} placeholder='rua' value={endereco.rua}  ref={ruaref} disabled />
                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'text'} placeholder='rua' onChange={e => setRua(e.target.value)} />
                }

            </div>
            <div>
                <label>numero Rua</label><br />
                {editEndereco == true &&
                    <input type={'number'} placeholder='numero Rua' onChange={e => setNumeroRua(e.target.value)} ref={numeroref} />
                }
                {Object.keys(endereco).length > 0 && editEndereco == false &&
                    <input type={'number'} placeholder='numero Rua' value={endereco.numeroRua}  ref={numeroref} disabled />
                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'number'} placeholder='numero Rua' onChange={e => setNumeroRua(e.target.value)} />
                }

            </div>
            <div>
                <label>complemento</label><br />
                {editEndereco == true &&
                    <input type={'text'} placeholder='complemento' onChange={e => setComplemento(e.target.value)} ref={complementoref} />
                }
                {Object.keys(endereco).length > 0 && editEndereco == false &&
                    <input type={'text'} placeholder='complemento' value={endereco.complemento} ref={complementoref} disabled />
                }
                {Object.keys(endereco).length === 0 &&
                    <input type={'text'} placeholder='complemento' onChange={e => setComplemento(e.target.value)} />
                }

            </div>
            {endereco != undefined &&
                <div className="bg-[green]"><button onClick={liberarEdicao} name='endereco' >Editar Endereco</button></div>
            }
            {endereco == undefined &&
                <div className="bg-[blue]"><button onClick={enviarEndereco} name='endereco' >adicionar Endereco</button></div>
            }
            {editEndereco &&
                <div className="bg-[yellow]"><button onClick={salvarEditEndereco} name='upEndereco' >Salvar Edicao</button></div>
            }
        </div>
    )
}