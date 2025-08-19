import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="categories" 
        options={{ 
          title: "All Categories",
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="products" 
        options={{ 
          title: "Products",
          headerShown: true
        }} 
      />
      <Stack.Screen 
        name="(shop)" 
        options={{ 
          title: "My Shop",
          headerShown: true
        }} 
      />
    </Stack>
  );
}