import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {BankListResponse} from './useGetBankList.types';

const url = 'https://dev.obtenmas.com/catom/api/challenge/banks';
const KEY_STORAGE = 'bankList';

const getAllBanksURL = () =>
  fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.error(err));

export const useGetBankList = () => {
  const [data, setData] = useState();
  const {getItem, setItem} = useAsyncStorage(KEY_STORAGE);

  const writeItemFromStorage = (newData: BankListResponse[]): void => {
    setItem(JSON.stringify(newData));
    setData(data);
  };

  useEffect(() => {
    const readDataFromStorage = async () => {
      const item = await getItem();
      if (item) {
        setData(JSON.parse(item));
      }
    };
    readDataFromStorage();
  }, [getItem]);

  useQuery<BankListResponse[]>([KEY_STORAGE], getAllBanksURL, {
    onSuccess: newData => writeItemFromStorage(newData),
  });

  return {data};
};
