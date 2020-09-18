import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import Login from '../src/component/Components/login'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
})

it("Renders successfully", () => {
  const {queryByTestId, queryByPlaceholderText} = render(<Login />)
  expect (queryByTestId("login")).toBeTruthy()
  expect (queryByPlaceholderText("Employee ID")).toBeTruthy()
})
