import React from 'react';
import Header from '@/components/organisms/Header';
import { BookingProvider } from '@/stores/BookingContext';
import { Route, Switch } from 'react-router-dom';
import { Main, My } from '@/pages';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';

const result = dotenv.config();
console.log(result);
const App: React.FC = () => {
  return (
    <div className="App">
      <BookingProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Main} />
          <Switch>
            <Route path="/my/:name" component={My} />
            <Route path="/my" components={My} />
          </Switch>
        </ThemeProvider>
      </BookingProvider>
    </div>
  );
};

export default App;
