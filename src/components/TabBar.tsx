import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../modules';

export const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // const Icon = TAB_ROUTES.find(({ name }) => name === label)?.icon;

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

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            {/* <Icon
              customColor={
                isFocused ? theme.color.white : theme.color.wintergreen
              }
            /> */}
            {isFocused && (
              <Text style={[styles.label, theme.typography.placeholder]}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    height: 88,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  label: {
    color: '#fff',
    marginTop: theme.spacing.xs,
  },
});
