
import { useContext } from "react";
import { ContextCriador } from '../criadorElementoContext';
import Button from '@mui/material/Button';


export default function Configbox() {
    const elementos = useContext(ContextCriador)
    const addLinha = (e) => {
        if (elementos.conteudoSelect == undefined) {
            console.log('selecione 1 box')
        } else {
            const copiaElementos = [...elementos.elementoCriado]
            const adicionaLinha = copiaElementos.map((el) => {
                if (el.id == elementos.conteudoSelect.id) {

                    const magica = el.classes.split(' ')
                    const linha = 'flex-row'
                    let procuraCol = magica.indexOf('flex-col')
                    let procuraRow = magica.indexOf('flex-row')
                    if (procuraCol != -1) {
                        magica.splice(procuraCol, 1)
                    }
                    if (procuraRow != -1) {
                        alert('linha ja adicionada')
                        return el
                    } else {
                        magica.push(linha)
                        const mudar = magica.toString().replace(/\,/g, ' ')
                        return { ...el, classes: mudar }
                    }
                } else {
                    return el
                }
            })
            elementos.setElementoCriado(adicionaLinha)
        }
    }

    const addColuna = (e) => {
        if (elementos.conteudoSelect == undefined) {
            alert('selecione 1 box')
        } else {
            const pegarBox = [...elementos.elementoCriado]
            const adicionaCol = pegarBox.map((el) => {
                if (el.id == elementos.conteudoSelect.id) {
                    const magica = el.classes.split(' ')
                    const coluna = 'flex-col'
                    let procuraRow = magica.indexOf('flex-row')
                    let procuraCol = magica.indexOf('flex-col')

                    if (procuraRow != -1) {
                        magica.splice(procuraRow, 1)
                    }
                    if (procuraCol != -1) {
                        alert('coluna ja adicionada')
                        return el
                    } else {
                        magica.push(coluna)
                        const mudar = magica.toString().replace(/\,/g, ' ')
                        return { ...el, classes: mudar }
                    }

                } else {
                    return el
                }
            })
            elementos.setElementoCriado(adicionaCol)
        }
    }

    return (
        <div className="flex mt-2">
            <Button variant="contained" size="small" onClick={addLinha} name={'div'} className="buttonCriarElemento m-1">
                Linha
            </Button>
            <Button variant="contained" size="small" onClick={addColuna} name={'div'} className="buttonCriarElemento m-1">
                Coluna
            </Button>

        </div>
    )
}