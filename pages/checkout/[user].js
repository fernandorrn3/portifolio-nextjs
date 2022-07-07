import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useSelector } from 'react-redux';
import styles from './checkout.module.css'
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
export default function Checkout(){
    const { data: session, status } = useSession()
const estado = useSelector((state) => state.reduceridorder)

const router = useRouter()



  /* 
test_user_48422516@testuser.com*/



//inserir ordem do pedido no banco de dados
//para eu inserir banco de dados primeiro devo criar uma tabela e relacionar ela ao usuario em questao


    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50',{
      locale: 'pt-BR'
    })
  
    useEffect(async () => {
     if(estado.length === 0){
      router.push('/storage')
     }
    
        if (mercadopago) {
          mercadopago.checkout({
            preference: {
                id: parseInt(estado[0].guardarid)
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


  

    return(
        <div>
           
     
            
<h1>pagina de teste</h1>

<div className={styles.lorota}> 
<form id="form-checkout" >
   <div id="form-checkout__cardNumber-container" className={styles.container}></div>
   <div id="form-checkout__expirationDate-container" className={styles.container}></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div id="form-checkout__securityCode-container" className={styles.container}></div>
   <select name="issuer" id="form-checkout__issuer"></select>
   <select name="identificationType" id="form-checkout__identificationType"></select>
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" className="progress-bar">Carregando...</progress>
 </form>
</div>


<div className="cho-container" />

        </div>
        
    )
}