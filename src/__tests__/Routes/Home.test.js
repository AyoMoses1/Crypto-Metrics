import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Home from '../../routes/Home';

it('App component test', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
