import { useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import JobsList from './components/JobsList/JobsList'
import Data from './data.json';
import './App.css';

function App() {

  const [languageFilter, setlanguageFilter] = useState([]);
  const [hasLanguage, sethasLanguage] = useState(false);
  const [roleFilter, setroleFilter] = useState("");
  const [levelFilter, setlevelFilter] = useState("");
  const [hasFilter, sethasFilter] = useState(false);

  // console.log(languageFilter);

  function grandParentFunction(item) {
    setroleFilter(item);
    sethasFilter(true);
  }

  function grandParentFunction2(item) {
    setlevelFilter(item);
    sethasFilter(true);
  }

  function grandParentFunction3(item) {
    
    if (!languageFilter.includes(item)) {
      sethasLanguage(true);
      sethasFilter(true);
      setlanguageFilter(languageFilter.concat([item]));
    }
  }
  

  function removeRole() {
    setroleFilter("");
    if (levelFilter === "" && hasLanguage === false) {
      sethasFilter(false);
    }
  }

  function removeLevel() {
    setlevelFilter("");
    if (roleFilter === "" && hasLanguage === false) {
      sethasFilter(false);
    }
  }

  function removeLanguage(index) {
    const newArray = languageFilter.filter((item) => item !== index);
    setlanguageFilter(newArray);
    if (newArray.length === 0) {
      sethasLanguage(false);
      if (levelFilter === false && roleFilter === false) {
        sethasFilter(false);
      }
    }
  }


  function clear() {
    sethasFilter(false);
    sethasLanguage(false);
    setlevelFilter("");
    setroleFilter("");
    setlanguageFilter([]);
  }

  return (
    <div className="app-container">
      <img src="./images/bg-header-desktop.svg" alt="Bg" className='bg'/>
      <FilterBar removeRole={removeRole} removeLevel={removeLevel} removeLanguage={removeLanguage} hasFilter={hasFilter} clear={clear} languageFilter={languageFilter} hasLanguage={hasLanguage} roleFilter={roleFilter} levelFilter={levelFilter}  />
      <JobsList parentCallback={grandParentFunction} parentCallback2={grandParentFunction2} parentCallback3={grandParentFunction3} data={Data} hasFilter={hasFilter} hasLanguage={hasLanguage} languageFilter={languageFilter} roleFilter={roleFilter} levelFilter={levelFilter}/>
    </div>
  );
}

export default App;
