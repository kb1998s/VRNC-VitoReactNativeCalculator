
import React, { Component } from 'react';
import { WebView } from 'react-native';

const MyInlineWeb: () => Node = () => {
  
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  
}
export default MyInlineWeb;