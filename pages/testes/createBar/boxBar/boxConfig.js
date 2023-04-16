import { useContext } from "react";
import { ContextCriador } from "../../criadorElementoContext";
import { useState } from "react";
import AlignHorizontalCenterRoundedIcon from '@mui/icons-material/AlignHorizontalCenterRounded';
import AlignVerticalCenterRoundedIcon from '@mui/icons-material/AlignVerticalCenterRounded';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

export default function ConfigboxItem() {
    const [direcao, setDirecao] = useState('');
    const [alinhamento, setAlinhamento] = useState('');
    const elementos = useContext(ContextCriador)


    const handleFormat = (event, novaDirecao) => {
        setDirecao(novaDirecao);
    };


    const mudarAlinhamento = (event, novoAlinhamento) => {
        setAlinhamento(novoAlinhamento);
    };


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
        <div>
            <ToggleButtonGroup
                value={direcao}
                onChange={handleFormat}
                exclusive
                aria-label="text formatting">

                <ToggleButton value="flex-col" aria-label="item-box" onClick={addColuna}>
                    <AlignHorizontalCenterRoundedIcon />
                </ToggleButton>
                <ToggleButton value="flex-row" aria-label="item-box" onClick={addLinha}>
                    <AlignVerticalCenterRoundedIcon />
                </ToggleButton>



            </ToggleButtonGroup>

            <ToggleButtonGroup
             value={alinhamento}
             onChange={mudarAlinhamento}
             exclusive
             aria-label="text formatting">
            


                <ToggleButton value="justify-start" aria-label="item">
                    <FormatAlignLeftIcon />

                </ToggleButton>

                <ToggleButton value="justify-center" aria-label="item">
                    <FormatAlignCenterIcon />
                </ToggleButton>

                <ToggleButton value="justify-end" aria-label="item">
                    <FormatAlignRightIcon />
                </ToggleButton>
            </ToggleButtonGroup>

        </div>
    )
}