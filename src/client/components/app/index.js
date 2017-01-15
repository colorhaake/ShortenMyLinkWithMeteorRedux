import React from 'react';
import Header from './Header'
import ShortenLink from './ShortenLink'
import ShortenHistory from './ShortenHistory'
import './style/index.css'

const App = () => (
  <div>
   <Header title="Shorten My Link"/>
   <ShortenLink title="Enter a link to shorten"/>
   <ShortenHistory />
  </div>
)

export default App;
