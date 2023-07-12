import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Loading } from '@components/Loading';

import { Home } from '@screens/Home';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Provider } from 'react-redux';
import store from './src/store'

export default function App() {
  const [fontsLoaded] = useFonts({ Raleway_400Regular, Raleway_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <StatusBar
          style='light'
          translucent
          backgroundColor="transparent"
      />
      <Header />
      {fontsLoaded ? <Home /> : <Loading />}
      </Provider>
    </ThemeProvider>
  );
}

