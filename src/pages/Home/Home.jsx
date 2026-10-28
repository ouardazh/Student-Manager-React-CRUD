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

    if(editStudent){
      setStudent(student.map((item) => item === editestudent ? newStudent : item));
      Seteditestudent(null);
    }
    else{
      setStudent([...student, newStudent]);
    }
    
    
  };

  const deleteStudent = (studente) => {
    setStudent(student.filter((x) => x !== studente));
  };

  // !editeeeee-------
  const [editestudent, Seteditestudent] = useState(null)
  const editStudent = (item) => {
    Seteditestudent (item)
    setInputName(item.name)
    SetInputAge (item.age) 
    setInputCity (item.city)
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

      <div className="secondContainer">
        <div className="infoStudent">
          <h3>Students</h3>
          <p>total: {student.length}</p>
        </div>
        
     {student.map((nme, index) => {
          return (
          <div className="infoStudent">
            <div>
              <h4 key={index}> {nme.name} </h4>
               <p className="textAgeCity" key={index}> {nme.age} . {nme.city}</p>
            </div>
            <div>
              <button onClick={()=>editStudent(nme)} className="editBtn">Edite</button>
              <button className="deleteBtn" onClick={() => deleteStudent(nme)}>Delete</button>
            </div>
            
            
          </div>
        );
      })}
    </div>
    <p className="lastTextgris">Practice Project: data is stored in useState and resets after refreshinh the page.</p>
      </div>
     
  );
}
export default Student;
