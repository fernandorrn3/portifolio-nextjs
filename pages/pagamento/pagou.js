import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react';
export default function Pagou() {



    const mercadopago = useMercadopago.v2('TEST-d8d031a1-af5b-45a8-8dd2-5933d1ad0c65', {
        locale: 'pt-BR'
    });
    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: '1158821207-7d7cf63f-c68c-4dd2-b83e-85a46684f3a0'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })

            // Step #3
const cardForm = mercadopago.cardForm({
    amount: '151.54',
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

    // test_user_60844175@testuser.com
    callbacks: {
      onFormMounted: function (error) {
        if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
      },
      onSubmit: function (event) {
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
  
         fetch(process.env.NEXT_PUBLIC_DB_HOST +  'mercadopago/mercadopago', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
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

    return (

        <div>
            <div>
                <form id="form-checkout">
                <div id="form-checkout__cardNumber-container" className="container"></div>
                <div id="form-checkout__expirationDate-container" className="container"></div>
                <input type="text" name="cardholderName" id="form-checkout__cardholderName" />
                <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" />
                <div id="form-checkout__securityCode-container" className="container"></div>
                <select name="issuer" id="form-checkout__issuer"></select>
                <select name="identificationType" id="form-checkout__identificationType"></select>
                <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" />
                <select name="installments" id="form-checkout__installments"></select>
                <button type="submit" id="form-checkout__submit">Pagar</button>
                <progress value="0" className="progress-bar">Carregando...</progress>
            </form>
            </div>
            <div className="cho-container" />
        </div>
    )
}