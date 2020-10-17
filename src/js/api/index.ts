import { DefaultApi } from "./client-base";

async () => {
  const api = new DefaultApi();
  const response = await api.fetchBook("1");
  const book = response.data;
  console.log(book);
};
