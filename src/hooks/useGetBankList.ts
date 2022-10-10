import {useQuery} from '@tanstack/react-query';

const url = 'https://dev.obtenmas.com/catom/api/challenge/banks';
type BankListResponse = {
  bankName: string;
  description: string;
  age: number;
  url: string;
};

const getAllBanksURL = () =>
  fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.error(err));

export const useGetBankList = () => {
  return useQuery<BankListResponse[]>(['bankList'], getAllBanksURL);
};
