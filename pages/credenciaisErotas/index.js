import Layout from "../../components/layout";

export default function CredenciaisErotas() {
    return (
        <div className="h-screen"> 
            <div className="grid grid-cols-2">
                <div className="bg-[green]">1</div>
                <div className="bg-[red]">2</div>
                <div className="bg-[red]">3</div>
                <div className="bg-[red]">4</div>
            </div>
            </div>
    )
}


CredenciaisErotas.getLayout = function (page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}