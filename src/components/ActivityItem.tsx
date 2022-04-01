import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  View,
} from 'react-native';

import { theme } from '../modules';

type PageProps = {
  label1: string;
  label2: string;
  image: string;
  disabled: boolean;
  style?: StyleProp<ViewStyle>;
};
export const ActivityItem: React.FC<PageProps & TouchableOpacityProps> = ({
  label1,
  label2,
  image,
  disabled,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, { opacity: disabled ? 0.3 : 1 }]}
      {...props}
    >
      <View style={{}}>
        <Text
          style={[
            { color: theme.colors.gray, marginTop: theme.spacing.xxs },
            theme.typography.body1,
          ]}
        >
          Masterclass By
        </Text>
        <Text
          style={[
            { color: theme.colors.gray, marginTop: theme.spacing.xxs },
            theme.typography.body2,
          ]}
        >
          {label1}
        </Text>
        <Text
          style={[
            { color: theme.colors.gray, marginTop: theme.spacing.xxs },
            theme.typography.body2,
          ]}
        >
          {label2}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
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
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.s,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: theme.radius - 5,
    backgroundColor: theme.colors.gray50,
  },
});
