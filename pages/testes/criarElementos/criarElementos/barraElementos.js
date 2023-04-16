import { Box, Item } from "./boxItem/boxEitem"
import { ColunaLayer, RowLayer } from './colunaRow/colunaRow'
import { Container } from "./container/container"
export default function BarraCriarElementos() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col">
                <div className="m-1"><h1>Layout Elementos</h1></div>
                <div className="flex flex-row justify-around">
                    <Container/>
                    <Item />
                    </div>
             
                <div className="flex flex-row justify-around">
                    <ColunaLayer />
                    <RowLayer />
                </div>
            </div>
        </div>
    )
}