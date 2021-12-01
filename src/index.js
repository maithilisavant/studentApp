import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "./Store/Store/store";
import HomeScreen from "./Screens/HomeScreen";
import StudentDetails from "./Screens/StudentDetails";

const middleware = applyMiddleware(thunk);
const store = configureStore(middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeScreen />}></Route>
          <Route path={"/student-details"} element={<StudentDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
