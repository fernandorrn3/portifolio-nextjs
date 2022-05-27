import Link from 'next/link'
export default function MenuElemento (){
return(
    <div>
        <h3> 
    <Link href="/adm/dashboard/fernandorrn">
    <a>dashboard</a>
  </Link>
  </h3>

<h3> 
  <Link href="/adm/database/fernandorrn">
    <a>database</a>
  </Link>
  </h3>


  <h3> 
  <Link href="/adm/token/fernandorrn">
    <a>token</a>
  </Link>
  </h3>

  <h3> 
  <Link href="/">
    <a>index</a>
  </Link>
  </h3>

    </div>
)
}