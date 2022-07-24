import { useMercadopago } from "react-sdk-mercadopago/lib"
import { useEffect } from "react";
import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
export default function Pagarboleto() {
    const router = useRouter()
    const {user} = router.query
    
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");
    const [tipo,settipo] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
        locale: 'pt-BR'
    })



 
    const onSubmit = async (data) => {
       


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
                            zip_code:'20910210',
                            street_name:'fausto barreto',
                            street_number:'61'
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
        
       const enviar = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'mercadopago/salvarCompra/' + user,{
            method:'POST',
            body:JSON.stringify(response.id)
        })

      const enviado = await enviar.json()
      console.log(enviado)  

    }
    
    return (

      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
      <div><input type="email" placeholder="email" {...register("email", { required: true})} /></div>
     <div><input type="text" placeholder="Nome" {...register("Nome", {required: true, min: 3})} /></div> 
      <div><input type="text" placeholder="Sobre-nome" {...register("Sobre-nome", {required: true, min: 3})} /></div>
      <div><input type="text" placeholder="Rua" {...register("rua", {required: true})} /></div>
      <div><input type="number" placeholder="Numero-rua" {...register("numeroRua", {required: true})} /></div>
      <div><input type="text" placeholder="Bairro" {...register("Bairro", {required: true})} /></div>
      <div><input type="text" placeholder="Cidade" {...register("Cidade", {required: true})} /></div>
      <div><input type="text" placeholder="Estado" {...register("Estado", {required: true})} /></div>
      <div><input type="number" placeholder="codigoPostal" {...register("codigoPostal", {required: true, maxLength: 9})} /></div>
      <div><CpfCnpj value={cpfCnpj}  placeholder = "Digite um CPF ou CNPJ"  onChange={(event, type) => { 
        setCpfCnpj(event.target.value.replace(/\D/g, '')); setMask(type === "CPF");
        {mask ? settipo('CPF') : settipo('CNPJ')}
        }}/>
        </div>
      <input type="submit" />
    </form>
        </div>
    )
}