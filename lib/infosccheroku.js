export async function infosacc(){
    const res = await fetch('https://api.heroku.com/account',{
        method:'GET',
        headers:{
            Accept: 'application/vnd.heroku+json; version=3',
            Authorization: 'Bearer 70de3e1e-700f-4a31-9c02-2a576d6ea5cf'
            
        }
    })

    const response = await res.json()
    return response
}


export async function Addonsinfo(){
    const res = await fetch(' https://api.heroku.com/addons',{
        method:'GET',
        headers:{
            Accept: 'application/vnd.heroku+json; version=3',
            Authorization: 'Bearer 70de3e1e-700f-4a31-9c02-2a576d6ea5cf'
            
        }
    })

    const response = await res.json()
    return response
}



export async function Infoaddonsintal(){
    const res = await fetch('https://api.heroku.com/addons/4dfddf1e-c6ef-4133-994f-f5a06bfbaa6d',{
        method:'GET',
        headers:{
            Accept: 'application/vnd.heroku+json; version=3',
            Authorization: 'Bearer 70de3e1e-700f-4a31-9c02-2a576d6ea5cf'
            
        }
    })

    const response = await res.json()
    return response
}