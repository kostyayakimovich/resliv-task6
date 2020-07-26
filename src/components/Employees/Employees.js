import React, { useState, useEffect, useCallback } from "react";
import { getEmployees } from "../../services/services";
import "./style.css";

const Employees = () => {
  const [listEmpl, setListEmpl] = useState([]);
  const [newEmpl, setNewEmpl] = useState("");

  useEffect(() => {
    const getDataEmpl = async () => {
      const { data } = await getEmployees();
      const namesEmpl = data.map(({ first_name, last_name }) => `${first_name} ${last_name}`);
      setListEmpl(namesEmpl);
    };
    getDataEmpl();
  }, []);

  const handleAddEmployees = useCallback(() => {
    const arrNewEmpl = [...listEmpl, newEmpl];
    setListEmpl(arrNewEmpl);
    setNewEmpl('');
  }, [listEmpl, newEmpl]);

  const handleRrmoveEmployees = useCallback((element) => {
    const updateArrEmpl = listEmpl.filter((item) => item !== element);
    setListEmpl(updateArrEmpl);
  }, [listEmpl]);

  return (
    <>
      <section className="employees-page">
        <div className="employee-add">
          <input className="employees-input" value={newEmpl} onChange=
            {({ target: { value } }) => setNewEmpl(value)}></input>
          <button className="empl-btn" onClick={handleAddEmployees}>
            добавить
            </button>
        </div>
        <ul>
          {listEmpl.map(element => (
            <li className="empl" key={element}>
              <p>{element}</p>
              <button className="empl-btn"
                onClick={() => handleRrmoveEmployees(element)}>
                удалить
                 </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

};
export default Employees;