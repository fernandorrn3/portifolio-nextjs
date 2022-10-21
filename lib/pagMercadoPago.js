import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react';

export default function PagarMercado(id) {
    const mercadopago = useMercadopago.v2('TEST-2b8722f0-4b5d-466a-a13f-893888463e50', {
        locale: 'pt-Br'
    });


    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: id
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mercadopago])
    
    return (
        <div>
            <div className="cho-container" />
        </div>
    )
}