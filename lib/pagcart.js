import { useEffect } from "react"
import { useMercadopago } from "react-sdk-mercadopago/lib"

export default function Pagarcard(){
    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
        locale: 'pt-BR'
      });

      useEffect(()=>{
if(mercadopago){
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

            const res = await fetch('https://api.mercadopago.com/v1/payments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
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
                },
                additional_info: {
                  items: [
                    {
                      id: "PR0001",
                      title: "Point Mini",
                      description: "Producto Point para cobros con tarjetas mediante bluetooth",
                      picture_url: "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
                      category_id: "electronics",
                      quantity: 1,
                      unit_price: 58.8
                    }
                  ],
                  payer: {
                    email: 'test_user_60844175@testuser.com',
                    first_name: "Test",
                    last_name: "Test",                   
                    address: {
                      zip_code: "12312-123",
                      street_name: "Av das Nacoes Unidas",
                      street_number: 3003
                    }
                  },
                  shipments: {
                    receiver_address: {
                      zip_code: "12312-123",
                      state_name: "Rio de Janeiro",
                      city_name: "Buzios",
                      street_name: "Av das Nacoes Unidas",
                      street_number: 3003
                    }
                  },
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
      },[mercadopago])
    return(
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
          
        </form>
      </div>
    )
}