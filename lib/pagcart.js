import { useEffect } from "react"
import { useMercadopago } from "react-sdk-mercadopago/lib"
import Script from 'next/script'
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Pagarcard() {
  const [codigoPostal, setCodigoPostal] = useState()
  const [rua, setRua] = useState()
  const [numeroRua, setNumeroRua] = useState()
  const itemSelect = useSelector(state => state.reducercarrinho.carrinho)
  const totalCompra = useSelector(state => state.reducercarrinho.total)
  const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
    locale: 'pt-BR'
  });

  useEffect(() => {
    if (mercadopago) {
      const cardForm = mercadopago.cardForm({
        amount: '22,00',
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
                'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933',
                'X-meli-session-id': device_id
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
                  items: itemSelect,

                  payer: {

                    address: {
                      zip_code: codigoPostal,
                      street_name: rua,
                      street_number: numeroRua
                    }
                  },
                  shipments: {
                    receiver_address: {
                      zip_code: '20910210',
                      state_name: 'rio de janeiro',
                      city_name: 'rj',
                      street_name: 'Av das Nacoes Unidas',
                      street_number: '1003',
                      floor: 'casa a'
                    }
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
  return (

    <div className="flex flex-col">
      <>
        <Script src="https://www.mercadopago.com/v2/security.js" view="checkout"></Script>
      </>
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
      <div className="bg-[green] flex flex-col">
        <div><h1>endereco de fatura</h1></div>
        <div>
          <label>Codigo Postal</label><br />
          <input type={'number'} placeholder='nome' onChange={e => setCodigoPostal(e.target.value)} />
        </div>

        <div>
          <label>Rua</label><br />
          <input type={'text'} placeholder='sobre-Nome' onChange={e => setRua(e.target.value)} />
        </div>

        <div>
          <label>Numero Rua</label><br />
          <input type={'number'} placeholder='Email' onChange={e => setNumeroRua(e.target.value)} />
        </div>


      </div>
    </div>
  )
}