import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { theme } from '../modules';

const windowWidth = Dimensions.get('screen').width;

type PageProps = {
  label: string;
  value: number;
  icon: JSX.Element;
};
export const MenuItem: React.FC<PageProps> = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text
        style={[
          { color: theme.colors.gray, marginTop: theme.spacing.xxs },
          theme.typography.body2,
        ]}
      >
        {label}
      </Text>
      <Text style={[{ color: theme.colors.gray }, theme.typography.body1]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    shadowColor: theme.colors.gray,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    width: windowWidth / 2 - theme.spacing.s,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
