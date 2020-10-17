import { api, BookResponse } from './api';

const load = async () => {
  const response = await api.fetchBook('1');
  console.log(response);

  const bookResponse: BookResponse = response.data;
  console.log(bookResponse);
};

load();
