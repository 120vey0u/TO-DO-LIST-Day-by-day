import { useState, useEffect } from 'react'
import axios from 'axios';
// import './App.css'


function App() {

  const [day, setDay] = useState('07-11-2026');

  const [values, setValues] = useState(() => {
    return JSON.parse(localStorage.getItem(`values${day}`)) || null;
  });

  useEffect(() => {
      if (!values) {
        const getValues = async () => {
        const response = await axios.get(`https://to-do-list-day-by-day.onrender.com/values/${day}`);
        const result = response.data;
        setValues(result);

        console.log('GET values successfully!');
        };

        getValues();
      } 
  }, []);

  useEffect(() => {
    localStorage.setItem(`values${day}`, JSON.stringify(values));
  }, [values]);

  const handleClicked = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setValues((prevValues) => ({...prevValues, [name]: checked}));
  };



  const [radioChecked, setRadioChecked] = useState(() => {
    return JSON.parse(localStorage.getItem(`radioChecked${day}`)) || null;
  });

  useEffect(() => {
    if (!radioChecked) {
      const getRadioChecked = async () => {
        const response = await axios.get(`https://to-do-list-day-by-day.onrender.com/radioChecked/${day}`);
        const result = response.data;
        setRadioChecked(result);

        console.log('GET values successfully!');
      };

      getRadioChecked();
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(`radioChecked${day}`, JSON.stringify(radioChecked));
  }, [radioChecked]);

  const handleRadioChecked = (e) => {
    const { name, value, checked } = e.target;
    if (value === 'zero') {
      setRadioChecked((prevRadioChecked) => ({...prevRadioChecked, [name]: {[value]: checked, 'aFourth': false, 'aHalf': false, 'threeFourth': false, 'oneHundred': false,}}));
    } else if (value === 'aFourth') {
      setRadioChecked((prevRadioChecked) => ({...prevRadioChecked, [name]: {[value]: checked, 'zero': false, 'aHalf': false, 'threeFourth': false, 'oneHundred': false,}}));
    } else if (value === 'aHalf') {
      setRadioChecked((prevRadioChecked) => ({...prevRadioChecked, [name]: {[value]: checked, 'zero': false, 'aFourth': false, 'threeFourth': false, 'oneHundred': false,}}));
    } else if (value === 'threeFourth') {
      setRadioChecked((prevRadioChecked) => ({...prevRadioChecked, [name]: {[value]: checked, 'zero': false, 'aHalf': false, 'aFourth': false, 'oneHundred': false,}}));
    } else if (value === 'oneHundred') {
      setRadioChecked((prevRadioChecked) => ({...prevRadioChecked, [name]: {[value]: checked, 'zero': false, 'aHalf': false, 'threeFourth': false, 'aFourth': false,}}));
    }
  };


  const handleSelect = (e) => {
    const { value } = e.target;
    setDay(value);

    const getValuesChanged = async () => {
      const response = await axios.get(`https://to-do-list-day-by-day.onrender.com/values/${value}`);
      const result = response.data;
      setValues(result);

      console.log('GET values successfully!');
    };

    if (!JSON.parse(localStorage.getItem(`values${value}`))) getValuesChanged();
    else setValues(JSON.parse(localStorage.getItem(`values${value}`)));

    const getRadioCheckedChanged = async () => {
      const response = await axios.get(`https://to-do-list-day-by-day.onrender.com/radioChecked/${value}`);
      const result = response.data;
      setRadioChecked(result);

      console.log('GET values successfully!');
    };

    if (!JSON.parse(localStorage.getItem(`radioChecked${value}`))) getRadioCheckedChanged();
    else setRadioChecked(JSON.parse(localStorage.getItem(`radioChecked${value}`)));
  };


  return (
    (!radioChecked || !values)  ? 'Loading...' : 
      <div>
        <select onChange={(e) => {handleSelect(e)}}>
          <option value='07-11-2026'>07-11-2026</option>
          <option value='08-11-2026'>08-11-2026</option>
        </select>

        <br />

        <label>
          <h2 style={{ display: 'inline' }}>
          <input type='checkbox' name='DSA' checked={values['DSA']} onChange={(e) => {handleClicked(e)}}/>DSA: <i>Euler 10005 </i>
        </h2></label>
        <label><input type='radio' name='workProgress1' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress1']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress1' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress1']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress1' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress1']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress1' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress1']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress1' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress1']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='DM1' checked={values['DM1']} onChange={(e) => {handleClicked(e)}} />DM1: <i>Combination Backtracking </i>
        </h2></label>
        <label><input type='radio' name='workProgress2' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress2']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress2' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress2']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress2' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress2']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress2' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress2']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress2' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress2']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}>
          <input type='checkbox' name='OLPAI' checked={values['OLPAI']} onChange={(e) => {handleClicked(e)}} />OLPAI: <i>Module 1 - Lesson 4 </i>
        </h2></label>
        <label><input type='radio' name='workProgress3' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress3']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress3' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress3']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress3' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress3']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress3' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress3']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress3' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress3']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}>
          <input type='checkbox' name='LMS' checked={values['LMS']} onChange={(e) => {handleClicked(e)}} />LMS: <i>Philosophy: One lecture and one test </i>
        </h2></label>
        <label><input type='radio' name='workProgress4' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress4']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress4' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress4']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress4' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress4']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress4' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress4']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress4' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress4']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}>
          <input type='checkbox' name='ROBOT' checked={values['ROBOT']} onChange={(e) => {handleClicked(e)}} />ROBOT: <i>Draw five subsystems mindmap </i>
        </h2></label>
        <label><input type='radio' name='workProgress5' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress5']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress5' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress5']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress5' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress5']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress5' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress5']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress5' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress5']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ color: 'orange', display: 'inline' }}><input type='checkbox' name='IELTS' checked={values['IELTS']} onChange={(e) => {handleClicked(e)}} />IELTS: <i>Finish the homework </i>
        </h2></label>
        <label><input type='radio' name='workProgress6' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress6']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress6' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress6']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress6' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress6']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress6' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress6']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress6' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress6']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='DS' checked={values['DS']} onChange={(e) => {handleClicked(e)}} />DS: <i>Code data loading module </i>
        </h2></label>
        <label><input type='radio' name='workProgress7' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress7']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress7' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress7']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress7' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress7']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress7' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress7']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress7' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress7']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='DEVOPS' checked={values['DEVOPS']} onChange={(e) => {handleClicked(e)}} />DEVOPS: <i>Research more about SQL Syntax - NOT NULL </i>
        </h2></label>
        <label><input type='radio' name='workProgress8' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress8']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress8' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress8']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress8' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress8']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress8' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress8']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress8' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress8']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='CN' checked={values['CN']} onChange={(e) => {handleClicked(e)}} />CN: <i>Packet Tracer </i>
        </h2></label>
        <label><input type='radio' name='workProgress9' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress9']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress9' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress9']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress9' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress9']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress9' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress9']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress9' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress9']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='PM&L' checked={values['PM&L']} onChange={(e) => {handleClicked(e)}} />PM&L: <i>LMS </i>
        </h2></label>
        <label><input type='radio' name='workProgress10' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress10']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress10' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress10']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress10' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress10']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress10' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress10']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress10' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress10']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='WP' checked={values['WP']} onChange={(e) => {handleClicked(e)}} />WP: <i>Complete connection between reactjs and expressjs </i>
        </h2></label>
        <label><input type='radio' name='workProgress11' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress11']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress11' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress11']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress11' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress11']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress11' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress11']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress11' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress11']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>

        <br /> <br />

        <label>
          <h2 style={{ display: 'inline' }}><input type='checkbox' name='PS' checked={values['PS']} onChange={(e) => {handleClicked(e)}} />PS: <i>Brainstorm the topic </i>
        </h2></label>
        <label><input type='radio' name='workProgress12' value='zero' style={{ display: 'inline' }} checked={radioChecked['workProgress12']['zero']} onChange={(e) => {handleRadioChecked(e)}} />0%</label>
        <label><input type='radio' name='workProgress12' value='aFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress12']['aFourth']} onChange={(e) => {handleRadioChecked(e)}} />25%</label>
        <label><input type='radio' name='workProgress12' value='aHalf' style={{ display: 'inline' }} checked={radioChecked['workProgress12']['aHalf']} onChange={(e) => {handleRadioChecked(e)}} />50%</label>
        <label><input type='radio' name='workProgress12' value='threeFourth' style={{ display: 'inline' }} checked={radioChecked['workProgress12']['threeFourth']} onChange={(e) => {handleRadioChecked(e)}} />75%</label>
        <label><input type='radio' name='workProgress12' value='oneHundred' style={{ display: 'inline' }} checked={radioChecked['workProgress12']['oneHundred']} onChange={(e) => {handleRadioChecked(e)}} />100%</label>
      </div>
  )
}

export default App;
