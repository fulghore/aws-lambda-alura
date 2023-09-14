import { log } from "./log.mjs";

export const handler = async (event) => {
  log("test event: " +  JSON.stringify(event));

  return {
    statusCode: 200,
    body: '<html><body>Dados da requisicao ${JSON.stringfy(event)}</body></html>',
    headers: {
      "content-type": "text/html"
    }
  };
};