// React JSX
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

// React Only
import { createElement as h } from "react";

const str = 'Hello';
const Hello = () => h('span', null , str +' World');
const App = () => 
  h('div', {className: 'aaa'},
    h('div', {className: 'xxx'},
      h(Hello, {abc: 123})
    )
  );
