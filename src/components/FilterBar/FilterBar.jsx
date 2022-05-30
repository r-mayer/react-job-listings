import './FilterBar.css';

function FilterBar(props) {
  function checkBlank(item) {
    if (item !== "") {
      return item;
    }
  }
  const newLanguageFilter = props.languageFilter.filter(checkBlank);
  console.log("O array de newlanguagefilter é:")
  console.log(newLanguageFilter)

    return(
      <div className={(props.hasFilter || props.hasLanguage) ? "filterbar-container active" : "filterbar-container"}>
        {
          (props.hasFilter || props.hasLanguage) ? 
          <>
            <div className="left-items">
              {(props.levelFilter !== "") && <span className="item" onClick={props.removeLevel}>{props.levelFilter}</span>}
              {(props.roleFilter !== "") && <span className="item" onClick={props.removeRole}>{props.roleFilter}</span>}
              {/* {newLanguageFilter.map((item, index) => {if (item !== "") return <span className="item" key={index}>{item}</span>})} */}
              {props.languageFilter.map((item, index) => (item !== "") &&  <span className="item" key={index} onClick={() => props.removeLanguage(item)}>{item}</span>)}
              {/* {newLanguageFilter.map((item, index) => {return <span className="item" key={index}>{item}</span>})} */}
            </div>
            <span className="clear" onClick={props.clear}>Clear</span>
          </>
        : ""
        }
      </div>
    )
}

export default FilterBar;