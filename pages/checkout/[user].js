import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react';
import Pagarcard from '../../lib/pagcart';
import Pagarboleto from '../../lib/pagbolet';
export default function Pagou() {

return(
  <div>
<Pagarboleto/>
  </div>
)
}