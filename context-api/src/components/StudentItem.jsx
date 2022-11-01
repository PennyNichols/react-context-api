import React, {useContext} from 'react'
import { StudentContext } from '../contexts/StudentContext';



const StudentItem = ({student}) => {

  const { changeColor} = useContext(StudentContext)
  const {id, name, age, color, email} = student;


  return (
    <div
      style={{
        background: color,
        paddingBottom: '2rem',
        paddingTop: '1rem',
        marginBottom: '1rem',
      }}>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>
        <h3>Age: {age}</h3>
        Color: {' '}
          <input type="text" placeholder={color} onChange={(e) => changeColor(e.target.value, id)} /> 

    </div>
  )
}

export default StudentItem