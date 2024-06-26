const credential = {
  method: "POST",
  headers: { Accept: "application/json" },
  body: new URLSearchParams({
    client_id: "65tvh6rvn4d7uer3hqqm2p8k2pvnm5wx",
    client_secret: "9Gt2dBRFTUgunSeRPqEFxwNgAfjNUPLP5EBvXKCn",
    grant_type: "client_credentials",
  }),
};

export async function getCredentials() {
  try {
    const response = await fetch(
      "https://sso-catalogo.redeancora.com.br/connect/token",
      credential
    );
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchData(placa) {
  try {
    const accessToken = await getCredentials();
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        veiculoFiltro: {
          veiculoPlaca: placa,
        },
        pagina: 0,
        itensPorPagina: 999,
      }),
    };

    const response = await fetch(
      "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario",
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
