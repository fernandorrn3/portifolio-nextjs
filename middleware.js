import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { deleteCookie,setCookie,getCookie } from 'cookies-next';


export async function middleware(req, res) {


  const cookieUser = req.cookies.get('chave')
  
  

    //return NextResponse.redirect(new URL('/error/VocePrecisaLogar', req.url))
  
    const userSessao = JSON.parse(cookieUser)
    const userUrl = req.nextUrl.pathname
    const lastItem = userUrl.substring(userUrl.lastIndexOf('/') + 1)
    if (userSessao.username != lastItem) {
      return NextResponse.redirect(new URL('/error', req.url))
    }
    return NextResponse.next() 

  }

export const config = {
  matcher: '/checkout/:path*',
}