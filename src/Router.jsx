import React from "react";
import { Route, Switch } from "react-router";
import {
  SignIn,
  ProductList,
  ProductDetail,
  ProductEdit,
  SignUp,
  Reset,
  CartList,
  OrderConfirm,
  OrderHistory,
} from "./templates";
import Auth from "./Auth";
const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signUp"} component={SignUp} />
      <Route exact path={"/signIn"} component={SignIn} />
      <Route exact path={"/signIn/reset"} component={Reset} />

      <Auth>
        <Route exact path={"(/)?"} component={ProductList} />
        <Route exact path={"/product/:id"} component={ProductDetail} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
        <Route exact path={"/cart"} component={CartList} />
        <Route exact path={"/order/confirm"} component={OrderConfirm} />
        <Route exact path={"/order/history"} component={OrderHistory} />
      </Auth>
    </Switch>
  );
};

export default Router;
