import Script from 'next/script'
import { useEffect } from 'react'

function Pagaaqui() {


   
    const pagarcartao = async () =>{
        const res = await fetch('https://sandbox.api.pagseguro.com/charges', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 010ABF993216402DB43AE5CC60F00C66',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            'reference_id': 'ex-00001',
            'description': 'Motivo da cobran\xE7a',
            'amount': {
                'value': 1000,
                'currency': 'BRL'
            },
            'payment_method': {
                'type': 'CREDIT_CARD',
                'installments': 1,
                'capture': true,
                'card': {
                    'encrypted': 'Un2W4IqYe/YtIAoGkUpDjZrzkUdVQVEgw1YZqjvxTYrP9BhXyn4mBPJdfr5Mk2rJ7sq69q7xIW58ILZVaSzAiRjrP3ugo6jcUCdSR5CQAxXRJ+2eiWYqSt0ZXF6FCZx4Rf+ebdCR+9VSqubcS7dT7rxtZ0zJz8mNSpMrfDHz9gRJMGtLfY93KrCPwsIMnGf7DgjCe2ttFAhLGYe27TOi9LGrOFgOid6MWJw6bHgsSLq4CSOcYmgdxS16gMJz+3dK39k/AHNtSZFtcIkcZ+YTC29IcOru6O2X/BeoW5fSFZrR+09gpvqeqeyAvrETd6Z7JxjDQZwDohcK+jsYi1+1ag=='
                }
            }
        })
    });
    const response = await res.json()
    console.log(response)
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

export default Pagaaqui