import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { theme } from '../modules';
import { Card } from '.';
import { AlertIcon, SearchIcon } from './icons';

type PageProps = {
  children: React.ReactNode;
};
export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gray50,
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <View style={styles.topItems}>
          <SearchIcon color={theme.colors.white} />
          <AlertIcon color={theme.colors.white} />
        </View>
        <Text style={[styles.title, theme.typography.header1]}>
          Department manager
        </Text>
        <View style={styles.items}>
          <Text style={[{ color: theme.colors.white }, theme.typography.body2]}>
            You have 45 tasks
          </Text>
          <Text style={[{ color: theme.colors.white }, theme.typography.body2]}>
            15.01.2021
          </Text>
        </View>
        <View style={{ height: '80%', marginTop: theme.spacing.xxs }}>
          <Card />
        </View>
      </View>
      <ScrollView
        style={{
          padding: theme.spacing.xs + 4,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.xs + 4,
    marginBottom: 90,
  },
  topItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.s,
    paddingHorizontal: theme.spacing.xxs,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xxs,
    marginBottom: theme.spacing.xxs,
  },
  title: {
    color: theme.colors.white,
  },
});
