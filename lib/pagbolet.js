import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { useSelector } from "react-redux";

export default function Pagarboleto() {

  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const [tipo, settipo] = useState('')
  const [nome, setNome] = useState()
  const [sobreNome, setSobreNome] = useState()
  const [email, setEmail] = useState()
  const itemSelect = useSelector(state => state.reducercarrinho.carrinho)
  const totalCompra = useSelector(state => state.reducercarrinho.total)
  const endereco = useSelector((elemento) => elemento.reducerEndereco.endereco)

  const Pagar = async (data) => {
    const res = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
      },

      body: JSON.stringify({
        transaction_amount: totalCompra,
        description: 'Compras Spacex',
        payment_method_id: 'bolbradesco',
        additional_info: {
          items: itemSelect,


          shipments: {
            receiver_address: {
              zip_code: endereco.cep,
              state_name: endereco.estado,
              city_name: endereco.cidade,
              street_name: endereco.rua,
              street_number: endereco.numeroRua,
              floor: endereco.complemento
            }
          }
        },
        payer: {
          email: 'test_user_60844175@testuser.com',
          first_name: nome,
          last_name: sobreNome,
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



      <div><button onClick={Pagar}>Pagar</button></div>
    </div>
  )
}