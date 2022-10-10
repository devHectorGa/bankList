import React from 'react';
import {ListRenderItem, StyleSheet} from 'react-native';
import {Card, Spacings} from 'react-native-ui-lib';
import {BankListResponse} from '../../../../hooks/useGetBankList.types';

export const BankCard: ListRenderItem<BankListResponse> = ({
  item: {bankName, description, url},
}) => (
  <Card height={120} key={bankName} row style={styles.container}>
    <Card.Section imageSource={{uri: url}} imageStyle={styles.image} />
    <Card.Section
      padding={Spacings.s2}
      content={[
        {text: bankName, text50: true, $textDefault: true},
        {text: description, style: styles.description},
      ]}
      contentStyle={styles.containerText}
    />
  </Card>
);

const styles = StyleSheet.create({
  container: {marginHorizontal: Spacings.s3},
  containerText: {
    padding: Spacings.s1,
    justifyContent: 'center',
    flex: 1,
  },
  image: {height: '100%', width: 120},
  text: {padding: Spacings.s4},
  description: {width: '75%'},
});
