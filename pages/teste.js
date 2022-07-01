import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react'
export default function Teste(){


  /* 
test_user_48422516@testuser.com*/




/*    { vendedor
      "id": 1151457994,
      "nickname": "TESTAIMP3TCP",
      "password": "qatest9810",
      "site_status": "active",
      "email": "test_user_9811954@testuser.com"
  }*/

    const mercadopago = useMercadopago.v2('APP_USR-ee66bf4e-7844-4b76-a95e-00b84cf984f8',{
      locale: 'pt-BR'
    })
  
    useEffect(async () => {

    
        if (mercadopago) {
          mercadopago.checkout({
            preference: {
                id: '1152142933-e64fae24-7692-425c-9006-aeba414d72de'
            },
            render: {
                container: '.cho-container',
                label: 'Pay',
            }
        })
        // Step #3
const cardForm = mercadopago.cardForm({
  amount: '100.5',
  iframe: true,
  form: {
    id: 'form-checkout',
    cardholderName: {
      id: 'form-checkout__cardholderName',
      placeholder: "Titular do cartão",
    },
    cardholderEmail: {
      id: 'form-checkout__cardholderEmail',
      placeholder: 'E-mail'
    },
    cardNumber: {
      id: 'form-checkout__cardNumber-container',
      placeholder: 'Número do cartão',
    },
    securityCode: {
      id: 'form-checkout__securityCode-container',
      placeholder: 'Código de segurança'
    },
    installments: {
      id: 'form-checkout__installments',
      placeholder: 'Parcelas'
    },
    expirationDate: {
      id: 'form-checkout__expirationDate-container',
      placeholder: 'Data de vencimento (MM/YYYY)',
    },
    identificationType: {
      id: 'form-checkout__identificationType',
      placeholder: 'Tipo de documento'
    },
    identificationNumber: {
      id: 'form-checkout__identificationNumber',
      placeholder: 'Número do documento'
    },
    issuer: {
      id: 'form-checkout__issuer',
      placeholder: 'Banco emissor'
    }
  },
  callbacks: {
    onFormMounted: function (error) {
      if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
    },
    onSubmit: async function (event) {
      event.preventDefault();

      const {
        paymentMethodId: payment_method_id,
        issuerId: issuer_id,
        cardholderEmail: email,
        amount,
        token,
        installments,
        identificationNumber,
        identificationType
      } = cardForm.getCardFormData();

      const res = await  fetch('https://api.mercadopago.com/v1/payments', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer APP_USR-5759687126222695-063012-33152790f6b184df09af231242552afb-1152142933'
         },
         body: JSON.stringify({
           token,
           issuer_id,
           payment_method_id,
           transaction_amount: Number(amount),
           installments: Number(installments),
           description: 'product description',
           payer: {
             email,
             identification: {
               type: identificationType,
               number: identificationNumber
            }
          }
        })
      })
      const response = await res.json()
      console.log(response)
    },
    onFetching: function (resource) {
      console.log('fetching... ', resource)
      const progressBar = document.querySelector('.progress-bar')
      progressBar.removeAttribute('value')

      return () => {
        progressBar.setAttribute('value', '0')
      }
    }
  }
});
            
        }
    }, [mercadopago])
  const gerar = async ()=>{
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
      },
      body: JSON.stringify({
          'items': [
              {
                  'title': 'Meu produto',
                  'quantity': 1,
                  'unit_price': 75.76
              }
          ]
      })
  });

    const res = await response.json()
    console.log(res)
  }
    return(
        <div>
           
     
            
<h1>pagina de teste</h1>
<form id="form-checkout">
   <div id="form-checkout__cardNumber-container" className="container"></div>
   <div id="form-checkout__expirationDate-container" className="container"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div id="form-checkout__securityCode-container" className="container"></div>
   <select name="issuer" id="form-checkout__issuer"></select>
   <select name="identificationType" id="form-checkout__identificationType"></select>
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" className="progress-bar">Carregando...</progress>
 </form>
<div><button onClick={gerar}>clica aqui</button></div>
<div className="cho-container" />

        </div>
        
    )
}