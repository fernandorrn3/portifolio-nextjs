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
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'serchuser',{
          method: 'POST',
          body: JSON.stringify(credentials),
          headers:{"Content-Type": "application/json"}

        })

        const user = await res.json()
     
 if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
       
      }
    }),

 
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      
     
      return session
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },

  pages:{
    signIn: '/credentials-signin',
  }
})