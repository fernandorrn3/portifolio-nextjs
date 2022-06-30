export default async function Gerartoken(clientid,acesstoken){
    const base = "https://api-m.sandbox.paypal.com";
const auth = Buffer.from(clientid + ":" + acesstoken).toString("base64");
const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
//vai gerar o token de acesso ao paypal
}