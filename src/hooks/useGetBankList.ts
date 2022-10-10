import {useQuery} from '@tanstack/react-query';
import {BankListResponse} from './useGetBankList.types';

const url = 'https://dev.obtenmas.com/catom/api/challenge/banks';

const getAllBanksURL = () =>
  fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.error(err));

export const useGetBankList = () => {
  return useQuery<BankListResponse[]>(['bankList'], getAllBanksURL);
};
