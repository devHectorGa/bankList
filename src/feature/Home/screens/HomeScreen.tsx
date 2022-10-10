import React from 'react';
import {Text, View} from 'react-native';
import {useGetBankList} from '../../../hooks/useGetBankList';

export const HomeScreen = () => {
  const {data} = useGetBankList();

  return (
    <View>
      {data
        ? data.map(({bankName}) => <Text key={bankName}>{bankName}</Text>)
        : 'Cargando'}
    </View>
  );
};
