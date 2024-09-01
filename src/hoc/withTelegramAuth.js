import React from 'react';
import { getQuests, claimQuest } from '../services/api';

const withTelegramAuth = (WrappedComponent) => {
  return (props) => {
    if (!window.Telegram?.WebApp?.initDataUnsafe?.user) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Telegram Authentication Required</h2>
          <p>This app can only be accessed through the Telegram application.</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withTelegramAuth;