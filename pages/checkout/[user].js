import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout';
import Pagarcard from '../../lib/pagcart';
import Pagarboleto from '../../lib/pagbolet';
import PagarPix from '../../lib/pagpix';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Edenreco from '../../components/endereco/cadastrarEdenreco';

function Checkout() {
  const [pagamento, setPagamento] = useState()
  const [cartaoStyle, setCartaoStyle] = useState('hidden')
  const [pixStyle, setPixStyle] = useState('hidden')
  const [boletoStyle, setBoletoStyle] = useState('hidden')
  const [mercadoStyle, setMercadoStyle] = useState('hidden')

  const router = useRouter()
  const { user } = router.query
  const { data: session, status } = useSession({
    required: true
  })
  const idorder = useSelector(elemento => elemento.reduceridorder)

  useEffect(() => {

    if (pagamento == 'cartao') {
      setCartaoStyle('flex flex-col')
      setBoletoStyle('hidden')
      setPixStyle('hidden')
      setMercadoStyle('hidden')
    }
    if (pagamento == 'boleto') {
      setBoletoStyle('flex flex-col')
      setCartaoStyle('hidden')
      setPixStyle('hidden')
      setMercadoStyle('hidden')
    }
    if (pagamento == 'pix') {
      setPixStyle('flex flex-col')
      setCartaoStyle('hidden')
      setBoletoStyle('hidden')
      setMercadoStyle('hidden')
    }
    if (pagamento == 'mercado') {
      setMercadoStyle('flex flex-col')
      setCartaoStyle('hidden')
      setBoletoStyle('hidden')
      setPixStyle('hidden')

    }
  }, [pagamento])

  useEffect(() => {
    if (!user) return
  }, [user])
  


  if (session) {
    setCookie('chave', session)
  }

  return (
    <div className='flex-flex-col min-h-screen'>

      <div className='grid grid-cols-12'>

        <div className="grid grid-cols-3 gap-4 col-start-2 col-end-12">

          <div className='flex flex-col bg-[red]'>
            {user != undefined &&
              <div><Edenreco usuario={user} /></div>
            }

          </div>

          <div className='bg-[green] flex flex-col'>
            <div>
              <h1>opcao de entrega</h1>
            </div>
            <div className='flex flex-col'>
              <div><h1>formas de pagamento</h1></div>

              <div>
                <input type="radio" id="cartao" name="fav_language" value="cartao" onClick={e => setPagamento(e.target.value)} />
                <label id="cartao">cartao</label><br />
                <input type="radio" id="boleto" name="fav_language" value="boleto" onClick={e => setPagamento(e.target.value)} />
                <label id="boleto">boleto</label><br />
                <input type="radio" id="pix" name="fav_language" value="pix" onClick={e => setPagamento(e.target.value)} />
                <label id="pix">pix</label><br />
                <input type="radio" id="mercado" name="fav_language" value="mercado" onClick={e => setPagamento(e.target.value)} />
                <label id="mercado">mercado</label><br />
              </div>

              <div className={cartaoStyle}>
                <Pagarcard />
              </div>
              <div className={boletoStyle}>
                <Pagarboleto />
              </div>
              <div className={pixStyle}>
                <PagarPix />
              </div>
              <div className={mercadoStyle}>
                <h1>mercado-pago</h1>
              </div>

            </div>
          </div>

          <div className='bg-[blue]'>
            <div><h1>finalizar compra</h1></div>
          </div>
        </div>

      </div>
    </div>
  )

}



Checkout.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Checkout