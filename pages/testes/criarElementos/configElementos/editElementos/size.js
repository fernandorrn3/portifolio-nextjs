import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Size() {
  return (
    <div className='m-2'>

      <Accordion className='bg-slate-700 '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Tamanho </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Largura />
          <Altura />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

function Largura() {
  return (
    <div>largura</div>
  )
}

function Altura() {
  return (
    <div>altura</div>
  )
}