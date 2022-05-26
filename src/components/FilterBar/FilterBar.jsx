import { useEffect } from "react";
import './FilterBar.css';


function FilterBar(props) {

    return(
      <div className={props.hasFilter ? "filterbar-container active" : "filterbar-container"}>
        {
          props.hasFilter ? 
          <>
            <div className="left-items">
              {(props.levelFilter !== "") && <span className="item">{props.levelFilter}</span>}
              {(props.roleFilter !== "") && <span className="item">{props.roleFilter}</span>}
              {props.languageFilter.map((item, index) => {if (item !== "") return <span className="item" key={index}>{item}</span>})}
            </div>
            <span className="clear" onClick={props.clear}>Clear</span>
          </>
        : ""
        }
      </div>
    )
}

export default FilterBar;