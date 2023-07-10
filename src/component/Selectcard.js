import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

function Selectcard() {
  const [list, setList] = useState([{ id: 1, title: "Laptop", price: 80000 }]);
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  const submitType = (id) => {
    debugger;
    setShow((show) => !show);
    const newList = list.filter((value) => value.id === id);
    setList(newList);
    setFilteredList(newList);
    console.log(show);
  };

  const addValue = (id) => {
    setCount(count + 1);
  };

  const getTotal = (g) => {
    if (count > 1) {
      const newtemp = g.price + g.price;
      return newtemp;
    }
  };

  const lessValue = (e) => {
    setCount(count - 1);
    // console.log(count);
  };

  return (
    <div>
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/lap1.webp" />
          <Card.Body>
            <Card.Title className="div">Laptop</Card.Title>
            <Card.Text>
              <div className="div">
                <table>
                  <thead>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                  </thead>
                  <tbody className="div">
                    {list.map((o) => {
                      return (
                        <tr>
                          <td>{o.id}</td>
                          <td>{o.title}</td>

                          <td>${o.price}</td>
                          <Button
                            onClick={() => submitType(o.id)}
                            variant="primary"
                          >
                            {show ? "try" : "buynow"}
                          </Button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {show ? (
        <h5>Happy Shopping</h5>
      ) : (
        <p>
          <table>
            <thead>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>

            <tbody>
              {list.map((o) => {
                return (
                  <tr>
                    <td>{o.id}</td>

                    <td>{o.title}</td>

                    <td>{o.price}</td>
                    <td>{count}</td>
                    <td>{getTotal(o)}</td>

                    <td>
                      <button type="submit" onClick={() => addValue(o.id)}>
                        +
                      </button>
                    </td>
                    <td>
                      <button type="submit" onClick={() => lessValue(o.id)}>
                        _
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </p>
      )}
    </div>
  );
}

export default Selectcard;
