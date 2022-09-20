import { useMercadopago } from "react-sdk-mercadopago/lib"
import { useEffect } from "react";
import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { useRouter } from "next/router";
export default function Pagarboleto() {

  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const [tipo, settipo] = useState('')
  const [nome, setNome] = useState()
  const [sobreNome, setSobreNome] = useState()
  const [email, setEmail] = useState()
  const [codigoPostal, setCodigoPostal] = useState()
  const [rua, setRua] = useState()
  const [numeroRua, setNumeroRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()

  const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
    locale: 'pt-BR'
  })




  const Pagar = async (data) => {



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
        payment_method_id: 'bolbradesco',
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
            first_name: "Test",
            last_name: "Test",
            phone: {
              area_code: 11,
              number: "987654321"
            },
            address: {
              zip_code: '20910210',
              street_name: 'fausto barreto',
              street_number: '61'
            }
          },
        },
        payer: {
          email: 'test_user_60844175@testuser.com',
          first_name: 'Test',
          last_name: 'Test',
          identification: {
            type: tipo,
            number: cpfCnpj,
          }
        }
      })
    });

    const response = await res.json()
    console.log(response)

    /*const enviar = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'mercadopago/salvarCompra/' + user, {
      method: 'POST',
      body: JSON.stringify(response.id)
    })

    const enviado = await enviar.json()
    console.log(enviado)*/

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
          <label>Cpf ou Cnpj</label><br />
          <CpfCnpj value={cpfCnpj} placeholder="Digite um CPF ou CNPJ" onChange={(event, type) => {
            setCpfCnpj(event.target.value.replace(/\D/g, ''));
            setMask(type === "CPF");
            { mask ? settipo('CPF') : settipo('CNPJ') }
          }} />
        </div>

      </div>


      <div className="bg-[green] flex flex-col">
        <div><h1>endereco</h1></div>
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
        <div>
          <label>bairro</label><br />
          <input type={'text'} placeholder='nome' onChange={e => setBairro(e.target.value)} />
        </div>

        <div>
          <label>cidade</label><br />
          <input type={'text'} placeholder='sobre-Nome' onChange={e => setCidade(e.target.value)} />
        </div>

        <div>
          <label>estado</label><br />
          <input type={'text'} placeholder='Email' onChange={e => setEstado(e.target.value)} />
        </div>

      </div>
      <div><button onClick={Pagar}>Pagar</button></div>
    </div>
  )
}