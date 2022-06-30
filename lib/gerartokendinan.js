export default async function Gerartokendinan(accessToken){
    const base = "https://api-m.sandbox.paypal.com";
    const response = await fetch(`https://api-m.sandbox.paypal.com/v1/identity/generate-token`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Language": "en_US",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.client_token;
}