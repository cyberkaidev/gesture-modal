import { StatusBar } from 'expo-status-bar';
import { Main } from './src/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Main />
    </GestureHandlerRootView>
  );
}
