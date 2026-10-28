import "./Home.css";
import { useState } from "react";

function Student() {
  const [inputName, setInputName] = useState("");
  const [inputAge, SetInputAge] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [student, setStudent] = useState([
    { name: "ouarda", age: 24, city: "alhoceima" },
  ]);
  const addStudent = () => {
    const newStudent = {
      name: inputName,
      age: inputAge,
      city: inputCity,
    };
    setStudent([...student, newStudent]);
  };

  const deleteStudent = (studente) =>{
    setStudent(student.filter(x => x !== studente))
  }

  return (
    <>
      <input onChange={(e) => setInputName(e.target.value)} value={inputName} type="text" />
      <input onChange={(e) => SetInputAge(e.target.value)} value={inputAge}  type="number" />
      <input onChange={(e) => setInputCity(e.target.value)} value={inputCity} type="text" />
      <button onClick={addStudent}>Add</button>
      


      {student.map((nme, index) => {
        return (
          <div>
            <h3 key={index}> {nme.name} </h3>
            <p key={index}>  {nme.age} . {nme.city} </p>
            <button onClick={()=>deleteStudent(nme)}>Delete</button>
            <button>Edite</button>
          </div>
        );
      })}
    </>
  );
}
export default Student;
