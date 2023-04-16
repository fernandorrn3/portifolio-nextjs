
import SelectElementos from "./selectElementos/selectElement"
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import BarraCriarElementos from "../criarElementos/barraElementos";
import Editelementos from "./editElementos/editElementos";


export function SectionTabsMobile() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (

    <div>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant={'scrollable'}  visibleScrollbar={true}>
          <Tab label="Elementos" value="one"  />
          <Tab label="Configuracoes" value="two" />
          <Tab label="Elementos Criados" value="three"/>
        </Tabs>


        <TabPanel value="one">
          <BarraCriarElementos />

        </TabPanel>
        <TabPanel value="two">
          <Editelementos />
        </TabPanel>
        <TabPanel value="three">
          <SelectElementos />
        </TabPanel>

      </TabContext>
    </div>
  )
}

export function SectionTabDesk() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant={'scrollable'} visibleScrollbar={true} scrollButtons className="m-2">

          <Tab label="Configuracoes" value="one"  />
          <Tab label="Elementos Criados"  value="two"/>
        </Tabs>


        <TabPanel value="one">
          <Editelementos />

        </TabPanel>

        <TabPanel value="two">
          <SelectElementos />
        </TabPanel>


      </TabContext>

    </div>
  )
}

export function SectionTablesMedio(){
  return(
    <div>
      
    </div>
  )
}