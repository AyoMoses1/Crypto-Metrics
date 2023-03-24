import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Details from './../../routes/Details';
import { BrowserRouter } from 'react-router-dom';

it('App component test', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  })