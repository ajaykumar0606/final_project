import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { FaBeer, FaEdit } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./App.css";

function About() {
  const [namelist, setNamelist] = useState("");
  const [agelist, setAgelist] = useState("");
  const [total, setTotal] = useState([]);
  const [edit, setEdit] = useState();
  const [error, setError] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000 + 1);
    setTotal([...total, { id, namelist, agelist }]);
    setError(total);
    if (!error.namelist) {
      error.namelist = "enter the name";
    }

    setNamelist("");
    setAgelist("");
  };

  const remove = (id) => {
    const newList = total.filter((index) => index.id != id);
    setTotal(newList);
    console.log(total);
    setNamelist("");
    setAgelist("");
  };
  const editValue = (id) => {
    setEdit(id);
    const newList = total.find((value) => value.id === id);
    setNamelist(newList.namelist);
    setAgelist(newList.agelist);
  };

  return (
    <div>
      <div className="form">
        <form>
          <label className="lable">Name</label>
          <input
            type="text"
            value={namelist}
            onChange={(n) => {
              setNamelist(n.target.value);
               required: {
            value: true,
            message: 'required',
            }}
          ></input>
          {error.namelist && <p>{error.namelist}</p>}

          <label className="lable">Age</label>
          <input
            type="number"
            value={agelist}
            onChange={(a) => {
              setAgelist(a.target.value);
            }}
          ></input>
          {/* <button
            type="submit"
            variant="dark"
            // className="lable"
            onClick={handleClick}
          >
            {edit ? "edit" : "submit"}
          </button> */}
          <Button
            type="submit"
            variant="dark"
            className="btn"
            onClick={handleClick}
          >
            {edit ? "edit" : "submit"}
          </Button>
        </form>
      </div>
      <table border="1px solid" className="table">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {total.map((o) => {
            return (
              <tr>
                <td key={o.id}>{o.namelist}</td>
                <td>{o.agelist}</td>
                <td>{o.edit}</td>
                <td>
                  <button className="fac" onClick={() => editValue(o.id)}>
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button className="delete" onClick={() => remove(o.id)}>
                    <BsFillTrash3Fill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default About;
