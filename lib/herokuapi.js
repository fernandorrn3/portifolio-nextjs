export default async function Testeheroku(){
    const res = await fetch('https://api.heroku.com/apps/aplicativoteste33456/builds ',{
       body: '{"source_blob":{"url":"https://github.com/fernandorrn3/portifolio-nextjs/archive/master.tar.gz", "version": "cb6999d361a0244753cf89813207ad53ad906a14"}}',
        headers:{
            "Accept": "application/vnd.heroku+json; version=3",
            "Authorization" : "Bearer 54ebbca0-4a12-4dd4-b27e-68aec8a7dff0"
        },
        method: 'POST',
    })

    const resposta = await res.json()

    return resposta
   
}



