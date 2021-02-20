import React from 'react';
import ReactDOM from 'react-dom';
import Root from '@/Root';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
// import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: `${process.env.REACT_APP_SENTRYDSN}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
