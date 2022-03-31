import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from './src/components';
import { EScreen } from './src/types';
import { TAB_ROUTES } from './src/modules';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = { headerShown: false };

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
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="root" component={TabContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
