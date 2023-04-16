import { useState } from 'react';
import ConfigboxItem from './boxConfig';
import CriarBoxItem from './criarBoxItem';
import SelectItemBox from './boxItemSelect';
export default function Box(props) {



    return (
        <div>
           
            <div className='flex flex-wrap'>
                <ConfigboxItem />
                <CriarBoxItem />
                <SelectItemBox/>
            </div>

        </div>

    )
}