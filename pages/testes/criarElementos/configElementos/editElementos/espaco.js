import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Espaco() {
    return (
        <div className="m-2">

            <Accordion className='bg-slate-700'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Espacamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Margin>
                        <Padding />
                    </Margin>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}


function Margin({ children }) {
    return (
        <div className="grid grid-cols-6 grid-flow-col ">
            <div className="col-start-1 col-end-7 p-2 grid grid-flow-col grid-cols-2 bg-slate-500">
                <div>
                <p className='text-sm'>margin</p>
                </div>
                <div>
                    0
                </div>
            </div>
            <div className="row-start-2 row-end-3 p-2 flex justify-center bg-slate-600">
                <div className="self-center">0</div>
            </div>
            {children}
            <div className=" row-start-2 row-end-3 p-2 flex justify-center bg-slate-600">
                <div className="self-center">0</div>
            </div>
            <div className="col-start-1 col-end-7 p-2 flex justify-center bg-slate-500">
                <div>0</div>
            </div>
        </div>
    )
}

function Padding() {
    return (
        <div className="col-start-2 col-end-6 grid grid-cols-6 grid-flow-col m-1">
            <div className="col-start-1 col-end-7  grid grid-flow-col grid-cols-2">
                <div>
                    <p className='text-sm'>padding</p>
                </div>
                <div>
                    0
                </div>
            </div>
            <div className="row-start-2 row-end-3  flex justify-center">
                <div className="self-center">0</div>
            </div>

            <div className="col-start-2 col-end-6 p-2 grid grid-cols-6 grid-flow-col bg-slate-700">

            </div>

            <div className="row-start-2 row-end-3 flex justify-center">
                <div className="self-center">0</div>
            </div>
            <div className="col-start-1 col-end-7 flex justify-center">
                <div>0</div>
            </div>
        </div>

    )
}