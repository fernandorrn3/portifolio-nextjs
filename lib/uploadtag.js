export default async function Uploadtarg(data){
    const formData = new FormData();
    formData.append('arquivo',data)
    console.log(formData)
    const res = await fetch('https://s3-external-1.amazonaws.com/heroku-sources-production/5468c/5468c77a-43d3-45bb-bd5f-e9199d361182?AWSAccessKeyId=AKIAJ6LKZGKGPARPZE4A&Signature=38dYDMl1K6CsreqCCx1wgBVKy6Q%3D&Expires=1648697455',{
        headers:{
            'Content-Type': '--data-binary @source.tgz',
            "Authorization" : "Bearer 54ebbca0-4a12-4dd4-b27e-68aec8a7dff0"
        },
        body: formData,
        method:'PUT'
    })

    const resposta = await res.json()

    return resposta
}