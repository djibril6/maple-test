import React from 'react';
import { View, Text } from 'react-native';

import { ActivityItem, Page } from '../../components';
import { ProfileIcon } from '../../components/icons';
import { theme } from '../../modules';

export const ActiviteScreen = () => {
  return (
    <Page
      title="December"
      subtitle="18 Activities"
      color={theme.colors.primary}
    >
      <View>
        <View>
          <Text>ha</Text>
        </View>
        <ActivityItem
          icon={<ProfileIcon color={theme.colors.primary} />}
          label="test"
        />
      </View>
    </Page>
  );
};
