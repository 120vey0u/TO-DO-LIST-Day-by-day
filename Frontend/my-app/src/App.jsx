import { useState, useEffect } from 'react'
// import './App.css'

//// Optimize day selection later
// const defaultValues = {
//   '07-11-2026': {
//     DSA: false,
//     DM1: false,
//     OLPAI: false,
//     LMS: false,
//     ROBOT: false,
//     IELTS: false,
//     DS: false,
//     DEVOPS: false,
//     CN: false,
//     'PM&L': false,
//     WP: false,
//     PS: false,
//     },
//   };

function App() {
  const [values, setValues] = useState(() => {
    return JSON.parse(localStorage.getItem('values')) || {};
  });

  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  const handleClicked = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setValues((prevValues) => ({...prevValues, [name]: checked}));
  };

  return (
    <span>
      <h1>07/11/2026</h1>
      <label><h2><input type='checkbox' name='DSA' value={values['DSA']} checked={values['DSA']} onChange={(e) => {handleClicked(e)}}/>DSA: <i>Euler 10005 </i></h2></label>
      <label><h2><input type='checkbox' name='DM1' value={values['DM1']} checked={values['DM1']} onChange={(e) => {handleClicked(e)}} />DM1: <i>Combination Backtracking </i></h2></label>
      <label><h2><input type='checkbox' name='OLPAI' value={values['OLPAI']} checked={values['OLPAI']} onChange={(e) => {handleClicked(e)}} />OLPAI: <i>Module 1 - Lesson 4 </i></h2></label>
      <label><h2><input type='checkbox' name='LMS' value={values['LMS']} checked={values['LMS']} onChange={(e) => {handleClicked(e)}} />LMS: <i>Philosophy: One lecture and one test </i></h2></label>
      <label><h2><input type='checkbox' name='ROBOT' value={values['ROBOT']} checked={values['ROBOT']} onChange={(e) => {handleClicked(e)}} />ROBOT: <i>Draw five subsystems mindmap </i></h2></label>
      <label><h2 style={{ color: 'orange' }}><input type='checkbox' name='IELTS' value={values['IELTS']} checked={values['IELTS']} onChange={(e) => {handleClicked(e)}} />IELTS: <i>Finish the homework </i></h2></label>
      <label><h2><input type='checkbox' name='DS' value={values['DS']} checked={values['DS']} onChange={(e) => {handleClicked(e)}} />DS: <i>Code data loading module </i></h2></label>
      <label><h2><input type='checkbox' name='DEVOPS' value={values['DEVOPS']} checked={values['DEVOPS']} onChange={(e) => {handleClicked(e)}} />DEVOPS: <i>Research more about SQL Syntax - NOT NULL </i></h2></label>
      <label><h2><input type='checkbox' name='CN' value={values['CN']} checked={values['CN']} onChange={(e) => {handleClicked(e)}} />CN: <i>Packet Tracer </i></h2></label>
      <label><h2><input type='checkbox' name='PM&L' value={values['PM&L']} checked={values['PM&L']} onChange={(e) => {handleClicked(e)}} />PM&L: <i>LMS </i></h2></label>
      <label><h2><input type='checkbox' name='WP' value={values['WP']} checked={values['WP']} onChange={(e) => {handleClicked(e)}} />WP: <i>Complete connection between reactjs and expressjs </i></h2></label>
      <label><h2><input type='checkbox' name='PS' value={values['PS']} checked={values['PS']} onChange={(e) => {handleClicked(e)}} />PS: <i>Brainstorm the topic </i></h2></label>
    </span>
  )
}

export default App
