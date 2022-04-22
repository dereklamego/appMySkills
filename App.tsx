import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import codePush from "react-native-code-push";
import * as Sentry from "@sentry/react-native";


Sentry.init({
  dsn: "https://0ba6bddc9f994ba8af7dc1b3e0c41314@o1192743.ingest.sentry.io/6314491",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

function App() {

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });

    throw new Error('Não foi possível abrir a aplicação')

    SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar
        backgroundColor="#121015"
        barStyle="light-content"
      />
      <Home />
    </>
  )

}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App)