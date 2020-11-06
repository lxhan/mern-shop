import React from "react";

const HistoryPage = (props) => {
  const toDate = (unixTime) => {
    const date = new Date(unixTime);
    const year = date.toLocaleDateString("ko-KR");
    const time = date.toLocaleTimeString("ko-KR");
    return year + " " + time;
  };

  const getTotal = (history) => {
    let total = 0;
    history.map((item) => (total += item.price + item.fee));
    return total;
  };

  return (
    <div style={{ width: "80%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1>History</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Payment Id</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Fee</th>
            <th>Subtotal</th>
            <th>Total</th>
            <th>Date of Purchase</th>
          </tr>
        </thead>

        <tbody>
          {props.user.userData &&
            props.user.userData.history &&
            props.user.userData.history.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.fee}</td>
                <td>{item.price * item.quantity}</td>
                <td>{(item.price + item.fee) * item.quantity}</td>
                <td>{toDate(item.dateOfPurchase)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2 style={{ margin: "3rem 0" }}>
        Total money spent:{" "}
        {props.user.userData && getTotal(props.user.userData.history)}
      </h2>
    </div>
  );
};

export default HistoryPage;
