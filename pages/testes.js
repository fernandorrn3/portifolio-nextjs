
export default function Teste() {
    const testecorreios = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste', {
            method: 'POST',
           
        })
        const response = await res.json()
        console.log(response)
    }
    return (
        <div><h1>testando</h1>
            <button onClick={testecorreios}>clica aqui</button>
        </div>
    )
}

