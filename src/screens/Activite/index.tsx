import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ActivityItem, Page } from '../../components';
import { theme } from '../../modules';

const data = [
  {
    id: 1,
    date: 'Fri',
    day: 12,
    items: [
      {
        id: '1',
        text: 'Benefit',
        time: '9 AM - 10 AM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: true,
      },
      {
        id: '2',
        text: 'Nars',
        time: '10 AM - 11 AM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: false,
      },
      {
        id: '3',
        text: 'Benefit',
        time: '12 AM - 1 PM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: false,
      },
    ],
  },
  {
    id: 2,
    date: 'Sat',
    day: 13,
    items: [
      {
        id: '1',
        text: 'Benefit',
        time: '9 AM - 10 AM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: false,
      },
      {
        id: '2',
        text: 'Nars',
        time: '10 AM - 11 AM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: false,
      },
      {
        id: '3',
        text: 'Benefit',
        time: '12 AM - 1 PM',
        image: 'https://i.ibb.co/DzBqpw2/koala.png',
        disabled: false,
      },
    ],
  },
];

export const ActiviteScreen = () => {
  return (
    <Page
      title="December"
      subtitle="18 Activities"
      color={theme.colors.primary}
    >
      {data.map(({ id, date, day, items }) => (
        <View key={id} style={styles.itemGroup}>
          <View style={styles.itemLeft}>
            <Text style={[styles.text1, theme.typography.body1]}>{date}</Text>
            <Text style={[styles.text2, theme.typography.header1]}>{day}</Text>
          </View>
          <View style={styles.itemRight}>
            {items.map((item) => (
              <ActivityItem
                key={id + item.id}
                image={item.image}
                label1={item.text}
                label2={item.time}
                disabled={item.disabled}
                style={{ marginBottom: theme.spacing.xs }}
              />
            ))}
          </View>
        </View>
      ))}
    </Page>
  );
};

const styles = StyleSheet.create({
  itemGroup: {
    flexDirection: 'row',
    marginBottom: theme.spacing.s,
  },
  itemLeft: {
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRight: {
    flex: 1,
  },
  text1: {
    textTransform: 'uppercase',
    color: theme.colors.gray,
  },
  text2: {
    color: theme.colors.primary,
  },
});
