import { SafeAreaView } from 'react-native-safe-area-context';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ShopLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
        <Tabs.Screen name="index" options={{ title: 'Shop' }} />
        <Tabs.Screen name="categories/index" options={{ title: 'Categories' }} />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
  }
});