import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { theme } from '../modules';

type PageProps = {
  label: string;
  icon: JSX.Element;
  style?: StyleProp<ViewStyle>;
};
export const ActivityItem: React.FC<PageProps & TouchableOpacityProps> = ({
  label,
  icon,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text
        style={[
          { color: theme.colors.gray, marginTop: theme.spacing.xxs },
          theme.typography.body1,
        ]}
      >
        {label}
      </Text>
      {icon}
    </TouchableOpacity>
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
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.s,
  },
});
