import { useEffect, useState } from 'react';
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
    sethasLanguage(true);
    sethasFilter(true);
    if (!languageFilter.includes(item)) {
      languageFilter.push(item);
    }
  }

  console.log(languageFilter)

  function clear() {
    sethasFilter(false);
    sethasLanguage(false);
    setlevelFilter("");
    setroleFilter("");
    setlanguageFilter([""]);
  }

  return (
    <div className="app-container">
      <img src="./images/bg-header-desktop.svg" alt="Bg" className='bg'/>
      <FilterBar hasFilter={hasFilter} clear={clear} languageFilter={languageFilter} roleFilter={roleFilter} levelFilter={levelFilter}  />
      <JobsList parentCallback={grandParentFunction} parentCallback2={grandParentFunction2} parentCallback3={grandParentFunction3} data={Data} hasFilter={hasFilter} hasLanguage={hasLanguage} languageFilter={languageFilter} roleFilter={roleFilter} levelFilter={levelFilter}/>
    </div>
  );
}

export default App;
