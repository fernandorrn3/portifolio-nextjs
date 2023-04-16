import { useContext } from "react";
import { ContextCriador } from '../criadorElementoContext';
import { arrayMoveImmutable } from 'array-move';
import Button from '@mui/material/Button';
export default function Estiloimg() {
    const elementos = useContext(ContextCriador)
    const imgFloatLeft = (e) => {
        if (elementos.textoSelect != null) {
            const pegarFilhos = elementos.elementoCriado.map((el) => {
                if (el.id == elementos.conteudoSelect.id) {
                    const filhos = el.filhos.map((il) => {
                        return il
                    })
                    return filhos
                }

            })

            const pegarPosicao = pegarFilhos[0].map((el) => {
                return el.id
            }).indexOf(elementos.textoSelect.id)

            const novaPosicao = arrayMoveImmutable(pegarFilhos[0], pegarPosicao, 1)
            console.log(elementos.conteudoSelect.id)
            elementos.setElementoCriado(elementos.elementoCriado.map((el) => {

                if (el.id == elementos.conteudoSelect.id) {
                    return { ...el, filhos: novaPosicao }
                } else {
                    return el
                }

            }))
        } else {
            alert('selecione o texto a flutuar')
        }
        /*   */

    }
    return (
        <div className="flex ">
            <Button variant="contained" onClick={imgFloatLeft} size="small" className="buttonCriarElemento  m-1">
                Float-left
            </Button>
        </div>
    )

}