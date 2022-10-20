import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"



export default NextAuth({
  
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credencial',
      credentials: {
        username: { label: "email", type: "email" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'loginUser',{
          method: 'POST',
          body: JSON.stringify(credentials),
          headers:{"Content-Type": "application/json"}

        })

        const user = await res.json()
        const status = res.status
       
     
 if (status === 200) {
        return user
      }else{
        
        throw new Error(user.mensagem)

      
      }
      
      
     
       
      }
    }),

 
  ],

  callbacks: {

    
 
    async jwt({ token, user }) {
     
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user.access_token
        token.username = user.username
        token.isAdm = user.isAdm
      }

     
      
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.username = token.username
      session.isAdm = token.isAdm
      
     
      return session
    }
  },
  
  jwt: {
    maxAge: 1800,
    secret: "flamengoamormaior",
    encryption: true,
   
  },

  session:{
    maxAge: 1800,
  },


  pages:{
    signIn: '/login',
    error: '/login'
 
      
  }
})