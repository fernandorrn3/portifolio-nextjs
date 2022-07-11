import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect,useRef } from 'react'
import { useSession } from "next-auth/react"
import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';

export default function Checkout(){
  const formulario = useRef()
  const formholdemail = useRef()
  const cardnumber = useRef()
  const cardnome = useRef()
  const cvvcard = useRef()
  const parcelas = useRef()
  const datacard = useRef()
  const tipodoc = useRef()
  const doc = useRef()
  const bancoemissor = useRef()
  const progressbar = useRef()
  const idOrder = useSelector((state)=> state.reduceridorder)

const router = useRouter()




  /* 

test_user_48422516@testuser.com*/

//

//inserir a ordem do pedido no banco de dados
//para eu inserir banco de dados primeiro devo criar uma tabela e relacionar ela ao usuario em questao
//o que que eu vou fazer? um sistema onde vc ira comprar um app
//configuração completa dos dados do produto que  realizou a compra
//informaçao completa para o cliente do item comprado e do valor do produto
//plano de assinatura conforme o consumo da infra-estrutura
//colocar nivel cliente de acordo com o plano escolhido

//menu com informaçao dos respectivos serviços de infra

//consumo do banco de dados
//consumo das chamadas das serveless
//consumo do armazenamento de objetos


//barra de status implementaçao do sistema


//toda vez que um usuario realizar a compra ira ser criado 1 email para esse usuario
//com esse email nos iremos realizar o cadastro nos devidos serviçoes de hospedagem
//um painel para administrar a conta de cada email do cliente
//informaçao do site do cliente, se ele permanece ativo


//criaçao da lading page referente ao produto
//criaçao de uma pagina para entrar em contato com o administrador do sistema

//chat de contato

//1152142933-b1a1215e-1d5a-4eaa-ba87-f0c08796b823


    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50',{
      locale: 'pt-BR'
    })
  
    
    useEffect(async () => {
   
      console.log(formulario.current.id)
      if(idOrder.length === 0){
        return router.push('/storage')
       }
    
    
        if (mercadopago) {
          mercadopago.checkout({
            preference: {
                id: idOrder[0].guardarid,
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
    id: formulario.current.id,
    cardholderName: {
      id:cardnome.current.id,
      placeholder: "Titular do cartão",
    },
    cardholderEmail: {
      id: formholdemail.current.id ,
      placeholder: 'E-mail'
    },
    cardNumber: {
      id: cardnumber.current.id,
      placeholder: 'Número do cartão',
    },
    securityCode: {
      id: cvvcard.current.id,
      placeholder: 'Código de segurança'
    },
    installments: {
      id: parcelas.current.id,
      placeholder: 'Parcelas'
    },
    expirationDate: {
      id: datacard.current.id,
      placeholder: 'Data de vencimento (MM/YYYY)',
    },
    identificationType: {
      id: tipodoc.current.id,
      placeholder: 'Tipo de documento'
    },
    identificationNumber: {
      id: doc.current.id,
      placeholder: 'Número do documento'
    },
    issuer: {
      id: bancoemissor.current.id,
      placeholder: 'Banco emissor'
    }
  },
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

       fetch(process.env.NEXT_PUBLIC_DB_HOST + 'mercadopago/mercadopago' ,  {
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
      }).then((resp) => resp.json()).then((data)=>{
        console.log(data)
      })
    },
    onFetching: function (resource) {
      console.log('fetching... ', resource)
      const progressBar = progressbar.current.className
     

      return () => {
      
      }
    }
  }
});

            
        }
    }, [mercadopago])


  

    return(
        <div>
           
     
            
<h1>pagina de teste</h1>


<form id="form-checkout" ref={formulario}>
   <div id="form-checkout__cardNumber-container" className="container" ref={cardnumber}></div>
   <div id="form-checkout__expirationDate-container" className="container" ref={datacard}></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName" ref={cardnome}/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" ref={formholdemail}/>
   <div id="form-checkout__securityCode-container" className="container" ref={cvvcard}></div>
   <select name="issuer" id="form-checkout__issuer" ref={bancoemissor}></select>
   <select name="identificationType" id="form-checkout__identificationType" ref={tipodoc}></select>
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" ref={doc}/>
   <select name="installments" id="form-checkout__installments" ref={parcelas}></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" className="progress-bar" ref={progressbar}>Carregando...</progress>
 </form>



<div className="cho-container" />

        </div>
        
    )
}


/* headers: {
        
           'Content-Type': 'application/json',
           'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
         },*/