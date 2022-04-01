import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar, TAB_ROUTES } from './src/components';
import { EScreen } from './src/types';
import { ActiviteScreen } from './src/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = { headerShown: false };

export const STACK_ROUTES = [
  { name: EScreen.ROOT, component: TabContainer },
  { name: EScreen.ACTIVITE, component: ActiviteScreen },
];

function TabContainer() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={EScreen.HOME}
      screenOptions={screenOptions}
    >
      {TAB_ROUTES.map(({ name, component }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={EScreen.ROOT}
        >
          {STACK_ROUTES.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
