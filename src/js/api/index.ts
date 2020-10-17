import { DefaultApi } from './client-base';

export const load = async () => {
  const api = new DefaultApi();
  const response = await api.fetchBook('1');
  console.log(response);

  const book = response.data;
  console.log(book);
};
