import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as Progress from 'react-native-progress';

import { theme } from '../modules';

type PageProps = {
  test?: string;
};
export const Card: React.FC<PageProps> = ({ test }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text
          style={[
            { color: theme.colors.gray, marginBottom: theme.spacing.xs },
            theme.typography.body1,
          ]}
        >
          14 / 43 Tasks
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: theme.colors.gray }}>İş yoğunluğu</Text>
          <Text style={[{ color: theme.colors.gray }, theme.typography.body1]}>
            %47
          </Text>
        </View>

        <Progress.Bar
          progress={0.47}
          width={null}
          color={theme.colors.secondary}
          unfilledColor={theme.colors.gray50}
          borderColor="rgba(255, 255, 255, 0)"
        />
        <Progress.Bar
          progress={0.8}
          width={null}
          color={theme.colors.secondary}
          unfilledColor={theme.colors.gray50}
          borderColor="rgba(255, 255, 255, 0)"
          style={{ marginTop: theme.spacing.xs }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: theme.colors.gray }}>Tamamlama Oranı</Text>
          <Text style={[{ color: theme.colors.gray }, theme.typography.body1]}>
            %80
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Yapılacak İşler</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  body: {
    paddingVertical: theme.spacing.xs + 4,
    paddingHorizontal: theme.spacing.s + 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xs,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xxs,
  },
  title: {
    color: theme.colors.white,
  },
  footerText: {
    color: theme.colors.white,
  },
});
