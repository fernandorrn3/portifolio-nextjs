import Layout from "../../components/layout"
import { useMercadopago } from "react-sdk-mercadopago/lib"
import { useEffect } from "react";
//process.env.NEXT_PUBLIC_DB_HOST + 'pagamento/pagamento'
export default function Produtos(){
    const mp = useMercadopago.v2('APP_USR-30f2c97d-c6b1-42b9-8a4a-3062c19b6a3b');
   
useEffect(()=>{
    if(mp){
       // Step #3
const cardForm = mp.cardForm({
    amount: "100.5",
    autoMount: true,
    form: {
      id: "form-checkout",
      cardholderName: {
        id: "form-checkout__cardholderName",
        placeholder: "Titular do cartão",
      },
      cardholderEmail: {
        id: "form-checkout__cardholderEmail",
        placeholder: "E-mail",
      },
      cardNumber: {
        id: "form-checkout__cardNumber",
        placeholder: "Número do cartão",
      },
      expirationDate: {
        id: "form-checkout__expirationDate",
        placeholder: "Data de vencimento (MM/YYYY)",
      },
      securityCode: {
        id: "form-checkout__securityCode",
        placeholder: "Código de segurança",
      },
      installments: {
        id: "form-checkout__installments",
        placeholder: "Parcelas",
      },
      identificationType: {
        id: "form-checkout__identificationType",
        placeholder: "Tipo de documento",
      },
      identificationNumber: {
        id: "form-checkout__identificationNumber",
        placeholder: "Número do documento",
      },
      issuer: {
        id: "form-checkout__issuer",
        placeholder: "Banco emissor",
      },
    },
    callbacks: {
      onFormMounted: error => {
        if (error) return console.warn("Form Mounted handling error: ", error);
        console.log("Form mounted");
      },
      onSubmit: event => {
        event.preventDefault();
  
        const {
          paymentMethodId: payment_method_id,
          issuerId: issuer_id,
          cardholderEmail: email,
          amount,
          token,
          installments,
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData();
  
        fetch(process.env.NEXT_PUBLIC_DB_HOST + 'pagamento/pagamento', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: "Descrição do produto",
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }),
        }).then(response => response.json()).then((data)=>{
            console.log(data)
        });
          
      },

      
      onFetching: (resource) => {
        console.log("Fetching resource: ", resource);
  
       
      }
    },
  });
    }
   
},[mp])

  
    return(
      <> 
  
  <form id="form-checkout">
   <input type="text" name="cardNumber" id="form-checkout__cardNumber" className='bg-[blue] '/><br/> <br/>
   <input type="text" name="expirationDate" id="form-checkout__expirationDate" className='bg-[blue]'/><br/> <br/>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"  className='bg-[blue]'/><br/> <br/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"  className='bg-[blue]'/><br/> <br/>
   <input type="text" name="securityCode" id="form-checkout__securityCode"  className='bg-[blue]'/><br/> <br/>
   <select name="issuer" id="form-checkout__issuer"  className='bg-[blue]'></select><br/> <br/>
   <select name="identificationType" id="form-checkout__identificationType"  className='bg-[blue]'></select><br/> <br/>
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"  className='bg-[blue]'/><br/> <br/>
   <select name="installments" id="form-checkout__installments"  className='bg-[blue]'></select> <br/>
   <button type="submit" id="form-checkout__submit">Pagar</button><br/>
   <progress value="0" className="progress-bar">Carregando...</progress> <br/>
</form>
<h1>pagina de produtos</h1>
</>  
    )
}

Produtos.getLayout = function(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}
