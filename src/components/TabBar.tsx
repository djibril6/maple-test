import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../modules';
import { HomeScreen } from '../screens';
import { EScreen } from '../types';
import { AddIcon, ProfileIcon } from './icons';

type Route = {
  name: EScreen;
  component: React.ComponentType<any>;
  icon: React.FC<any>;
};

export const TAB_ROUTES: Route[] = [
  { name: EScreen.HOME, component: HomeScreen, icon: ProfileIcon },
  { name: EScreen.MY_MAPLE, component: HomeScreen, icon: ProfileIcon },
  { name: EScreen.STORES, component: HomeScreen, icon: ProfileIcon },
  { name: EScreen.ANALYTICS, component: HomeScreen, icon: ProfileIcon },
];

export const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const Icon = TAB_ROUTES.find(({ name }) => name === label)?.icon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getCorrectStyle = () => {
          let style = {};
          if (index === 1) {
            style = { borderTopRightRadius: 30 };
          } else if (index === 2) {
            style = { borderTopLeftRadius: 30 };
          }
          return style;
        };

        return (
          <React.Fragment key={route.key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={1}
              style={[styles.item, getCorrectStyle()]}
            >
              {Icon && (
                <Icon
                  color={isFocused ? theme.colors.primary : theme.colors.gray}
                />
              )}
              <Text style={[styles.label, theme.typography.body2]}>
                {label}
              </Text>
            </TouchableOpacity>
            {Boolean(index === 1) && (
              <View style={styles.middleItem}>
                <View style={styles.circleZone}>
                  <TouchableOpacity style={styles.circleButton}>
                    <AddIcon color={theme.colors.white} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.gray50,
    height: 88,
  },
  item: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
    backgroundColor: theme.colors.white,
  },
  label: {
    color: theme.colors.gray,
    marginTop: theme.spacing.xs,
  },
  middleItem: {
    flex: 0.7,
    backgroundColor: theme.colors.white,
  },
  circleZone: {
    width: '100%',
    height: '45%',
    backgroundColor: theme.colors.gray50,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
