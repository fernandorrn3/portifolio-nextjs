import Script from 'next/script'
import axios from "axios";
import { useState } from 'react';
function Pagaaqui() {

const [error,setError] = useState()
   
    const pagarcartao =  () =>{
        const options = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
              Authorization: 'Bearer 010ABF993216402DB43AE5CC60F00C66'
            }
          };
          
          fetch('https://sandbox.api.pagseguro.com/public-keys', options)
            .then(response => response.status)
            .then(response => setError(response))
            
            .catch(err => console.error(err));
    }


    
    return (
        <div>
            <div>
                <h1>{error}</h1>
                <h1>testando-api</h1>
                <button onClick={pagarcartao}>Pagar</button>
            </div>

            <Script src="https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js"></Script>
        </div>

    )
}

export default Pagaaqui