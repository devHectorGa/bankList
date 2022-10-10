import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, GridList, LoaderScreen, Spacings} from 'react-native-ui-lib';
import {useGetBankList} from '../../../hooks/useGetBankList';
import {BankCard} from '../components/BankCard/BankCard';

export const HomeScreen = () => {
  const {data} = useGetBankList();

  return (
    <GridList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={BankCard}
      numColumns={1}
      ListEmptyComponent={
        <LoaderScreen color={Colors.blue30} message="Cargando..." />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacings.s5,
  },
});
