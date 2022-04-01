import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MenuItem, MenuItemLine, Page } from '../../components';
import { ProfileIcon } from '../../components/icons';
import { theme } from '../../modules';
import { EScreen } from '../../types';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const onNavigate = useCallback(() => {
    navigation.navigate(EScreen.ACTIVITE as never);
  }, [navigation]);
  return (
    <Page
      title="Department manager"
      text1="You have 45 tasks"
      text2="15.01.2021"
      showCard
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <MenuItem
          label="My Approvals"
          value={12}
          onPress={onNavigate}
          icon={<ProfileIcon color={theme.colors.secondary} />}
        />

        <MenuItem
          label="Dept. Claim Tasks"
          value={42}
          icon={<ProfileIcon color={theme.colors.primary} />}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: theme.spacing.xs,
        }}
      >
        <MenuItem
          label="My Tasks"
          value={0}
          icon={<ProfileIcon color={theme.colors.warning} />}
        />

        <MenuItem
          label="Tasks I Issued"
          value={0}
          icon={<ProfileIcon color={theme.colors.info} />}
        />
      </View>

      <MenuItemLine
        label="All Tasks"
        icon={<ProfileIcon color={theme.colors.primary} />}
        style={{ marginTop: theme.spacing.s }}
      />
      <MenuItemLine
        label="Checklist"
        icon={<ProfileIcon color={theme.colors.secondary} />}
        style={{ marginTop: theme.spacing.xs }}
      />
      <MenuItemLine
        label="Orders"
        icon={<ProfileIcon color={theme.colors.info} />}
        style={{ marginTop: theme.spacing.xs }}
      />

      <MenuItemLine
        label="Visits"
        icon={<ProfileIcon color={theme.colors.warning} />}
        style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.s }}
      />
    </Page>
  );
};
