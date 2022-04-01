import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { theme } from '../modules';
import { Card } from '.';
import { AlertIcon, SearchIcon } from './icons';

type PageProps = {
  children: React.ReactNode;
  showCard?: boolean;
  title?: string;
  subtitle?: string;
  text1?: string;
  text2?: string;
  color?: string;
  image?: string;
};
export const Page: React.FC<PageProps> = ({
  children,
  showCard,
  title,
  subtitle,
  text1,
  text2,
  color = theme.colors.secondary,
  image,
}) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gray50,
        flex: 1,
      }}
    >
      <View
        style={[
          styles.header,
          {
            backgroundColor: color,
            height: showCard ? 250 : 'auto',
            marginBottom: showCard ? 90 : 0,
          },
        ]}
      >
        <View style={styles.topItems}>
          <SearchIcon color={theme.colors.white} />
          <AlertIcon color={theme.colors.white} />
        </View>
        <Text style={[styles.title, theme.typography.header1]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.title, theme.typography.header2]}>
            {subtitle}
          </Text>
        )}
        <View style={styles.items}>
          <Text style={[{ color: theme.colors.white }, theme.typography.body2]}>
            {text1}
          </Text>
          <Text style={[{ color: theme.colors.white }, theme.typography.body2]}>
            {text2}
          </Text>
        </View>
        {showCard && (
          <View style={{ height: '80%', marginTop: theme.spacing.xxs }}>
            <Card />
          </View>
        )}
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
    // backgroundColor: theme.colors.secondary,
    padding: theme.spacing.xs + 4,
  },
  topItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.l,
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
