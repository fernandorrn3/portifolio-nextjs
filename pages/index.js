
import Layout from '../components/layout'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Fotter from '../components/footer'






export default function Home() {
  
 
  
  
  return (
    <div className='bg-[blue] h-full'>
     
      
     <h1>index</h1>
    
    </div>
  )
}




Home.getLayout = function getLayout(Home) {
  return (
    <Layout>
      <Header/>
    {Home}
    <Fotter/>
    </Layout>
  )
}