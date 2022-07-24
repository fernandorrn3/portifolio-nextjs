import Script from 'next/script'

import { useState } from 'react';
function Page() {

const [error,setError] = useState()
   
    const pagarcartao =  async () =>{

        const res = await fetch('https://sandbox.api.pagseguro.com/public-keys', {
            method: 'POST',
           
            headers: {
                'Authorization': 'Bearer 010ABF993216402DB43AE5CC60F00C66',
                'Content-Type': 'application/json',
                'x-api-version': '1.0'
            },
            
            body:{
                'type': 'card'
            }
        });

    }
    return (
        <div>
            <div>
                <h1>testando-api</h1>
                <button onClick={pagarcartao}>Pagar</button>
            </div>

            <Script src="https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"></Script>
        </div>

    )
}

export default Page