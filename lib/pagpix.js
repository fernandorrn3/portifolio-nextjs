import { useState } from "react"
import { useEffect } from "react"
import { useMercadopago } from 'react-sdk-mercadopago';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
export default function PagarPix() {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [tipo, settipo] = useState('')
    const [nome, setNome] = useState()
    const [sobreNome, setSobreNome] = useState()
    const [email, setEmail] = useState()
    const [codigoPostal, setCodigoPostal] = useState()
    const [rua, setRua] = useState()
    const [numeroRua, setNumeroRua] = useState()
    

    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
        locale: 'pt-BR'
    })

    


    const Pagar = async() => {
        const res = await fetch('https://api.mercadopago.com/v1/payments', {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
            },
      
            body: JSON.stringify({
              transaction_amount: 105,
              description: 'titulo  do produto',
              payment_method_id: 'pix',
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
                  first_name: nome,
                  last_name: sobreNome,                
                  address: {
                    zip_code: codigoPostal,
                    street_name: rua,
                    street_number: numeroRua
                  }
                },
                shipments:{
                    receiver_address:{
                        zip_code:'20910210',
                        state_name:'rio de janeiro',
                        city_name:'rj',
                        street_name:'Av das Nacoes Unidas',
                        street_number:'1003',
                        floor:'casa a'
                    }
                }
              },

              payer:{
                email:'test_user_60844175@testuser.com',
                first_name:nome,
                last_name:sobreNome,
                identification:{
                    type:tipo,
                    number:cpfCnpj
                }
              }
           
            })
          });

          const response = await res.json()
    }

    return (
        <div className="flex flex-col bg-[yellow]">

            <div className="bg-[red] flex flex-col">
                <h1>Dados comprador</h1>
                <div>
                    <label>nome</label><br />
                    <input type={'text'} placeholder='nome' onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label>sobre-Nome</label><br />
                    <input type={'text'} placeholder='sobre-Nome' onChange={e => setSobreNome(e.target.value)} />
                </div>

                <div>
                    <label>email</label><br />
                    <input type={'text'} placeholder='Email' onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Cpf ou Cnpj</label><br/>
                    <CpfCnpj value={cpfCnpj} placeholder="Digite um CPF ou CNPJ" onChange={(event, type) => {
                        setCpfCnpj(event.target.value.replace(/\D/g, ''));
                        setMask(type === "CPF");
                        { mask ? settipo('CPF') : settipo('CNPJ') }
                    }} />
                </div>

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
            <div><button onClick={Pagar}>Pagar</button></div>
        </div>
    )
}