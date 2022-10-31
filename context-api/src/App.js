import {useState} from 'react';
import StudentList from './components/StudentList'
import data from './data'
import { StudentContext } from './contexts/StudentContext';



function App() {
  const [students, setStudents] = useState(data)
  
  const changeColor = (color, id) => {
    setStudents(
      students.map((student) =>
      student.id === id ? {...student, color: color} : student)
    )
  }

  const values = {
    students,
    changeColor
  }

  return (
    <div>
      <StudentContext.Provider value={values}>
        <StudentList  />

      </StudentContext.Provider>
    </div>
  );
}

export default App;
