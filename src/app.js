import React from 'react';

const str = 'Hello';
const Hello = () => <span>{str} World</span>
const App = () => (
  <div>
    <div className="xxx">
      <Hello abc="123"/>
    </div>
  </div>
);
