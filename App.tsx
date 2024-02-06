import React from 'react';
import {SafeAreaView} from 'react-native';
import Route from './src/routes/routes';
import Loading from './src/view/components/loading';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
const App = () => {
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Route />
      <Loading visible={isLoading} />
    </SafeAreaView>
  );
};
export default ReduxApp;
