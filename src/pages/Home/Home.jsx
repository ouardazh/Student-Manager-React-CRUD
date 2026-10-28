import "./Home.css";
import { useState } from "react";

function Student() {
  const [inputName, setInputName] = useState("");
  const [inputAge, SetInputAge] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [student, setStudent] = useState([
    { name: "ouarda", age: 24, city: "alhoceima" },
    { name: "widad", age: 24, city: "alhoceima" },
    { name: "widad", age: 24, city: "alhoceima" },
  ]);
  const addStudent = () => {
    const newStudent = {
      name: inputName,
      age: inputAge,
      city: inputCity,
    };
    setStudent([...student, newStudent]);
  };

  const deleteStudent = (studente) => {
    setStudent(student.filter((x) => x !== studente));
  };

  const editStudent = (newStd) => {
    const newStud = student.map((s) => {
      if (s.id === newStd) {
        return newStd;
      }
      return s;
    });
  };

  return (
    <div>
      <div className="container">
        <p className="textbleu">REACT . BEGINNER CRUD</p>
        <h1>Student Manager</h1>
        <p className="textgris">
          Create, Read, Update and Delete using useState.
        </p>
        <div className="addStudentContainer">
          <h3>Add a student</h3>
            <div className="containerInputs">
                <div>
                    <label htmlFor="">Name</label> <br />
                <input  onChange={(e) => setInputName(e.target.value)} value={inputName}  type="text"  placeholder="Student name"/>  <br />
                </div>
                <div>
                    <label htmlFor="">Age</label> <br />
                <input  onChange={(e) => SetInputAge(e.target.value)} value={inputAge} type="number" placeholder="Student age" />
                </div>
                <div>
                    <label htmlFor="">City</label> <br />
                    <input onChange={(e) => setInputCity(e.target.value)} value={inputCity} type="text"  placeholder="City"/>
                </div>
                
                
            </div>

          <button className="addBtn" onClick={addStudent}>Add student</button>
        </div>
      </div>

      {student.map((nme, index) => {
        return (
          <div>
            <h3 key={index}> {nme.name} </h3>
            <p key={index}>
              {" "}
              {nme.age} . {nme.city}{" "}
            </p>
            <button onClick={() => deleteStudent(nme)}>Delete</button>
            <button>Edite</button>
          </div>
        );
      })}
    </div>
  );
}
export default Student;
