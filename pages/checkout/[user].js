import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagarcard from '../../lib/pagcart';
import Pagarboleto from '../../lib/pagbolet';
import PagarPix from '../../lib/pagpix';
import Navbar from '../../components/navbar';
export default function Pagou() {
  const idorder = useSelector(elemento => elemento.reduceridorder)

  return (
    <div className='flex-flex-col'>
      <Navbar />
      <div className='grid grid-cols-12'>

        <div className="grid grid-cols-3 gap-4 col-start-2 col-end-12">

          <div className='bg-[red]'>
            <div><h1>endereco</h1></div>
          </div>

          <div className='bg-[green] flex flex-col'>
            <div><h1>opcao de entrega</h1></div>
            <div><h1>formas de pagamento</h1></div>
          </div>

          <div className='bg-[blue]'>
            <div><h1>finalizar compra</h1></div>
          </div>
        </div>

      </div>
    </div>
  )
}