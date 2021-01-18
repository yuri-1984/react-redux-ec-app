import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/styles";
import { getOrdersHistosy } from "../reducks/users/selectors";
import { fetchOrdersHistory } from "../reducks/users/operations";
import { OrderHistoryItem } from "../components/Products";

const useStyles = makeStyles((theme) => ({
  orderList: {
    background: theme.palette.grey["100"],
    margin: "0 auto",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 768,
    },
  },
}));

const OrderHistory = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const orders = getOrdersHistosy(selector);

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  console.log(orders);
  return (
    <section className="c-section-wrapin">
      <List className={classes.orderList}>
        {orders.length > 0 &&
          orders.map((order) => (
            <OrderHistoryItem order={order} key={order.id} />
          ))}
      </List>
    </section>
  );
};

export default OrderHistory;
