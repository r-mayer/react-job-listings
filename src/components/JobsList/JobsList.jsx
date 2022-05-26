import JobCard from "../JobCard/JobCard";
import './JobsList.css';

function JobsList(props) {

    if (props.hasFilter == false) {
        var dados = props.data;                
    } else {
        if (props.hasLanguage == false) {
            var dados = props.data.filter(item => 
                (
                    (item.role.includes(props.roleFilter))
                    && (item.level.includes(props.levelFilter))
                )
            );
        } else {
            var dados = props.data.filter(item => 
                (
                    (item.languages.includes(props.languageFilter[0])  || item.languages.includes(props.languageFilter[1]))
                    && (item.role.includes(props.roleFilter))
                    && (item.level.includes(props.levelFilter))
                )
            );
        }
    }

    return(
        <div className="jobs-list-container">
            {
                dados.map((card, index) => {
                    return (
                        <JobCard key={index}
                            id={card.id}
                            company={card.company}
                            logo={card.logo}
                            new={card.new}
                            featured={card.featured}
                            position={card.position}
                            role={card.role}
                            level={card.level}
                            postedAt={card.postedAt}
                            contract={card.contract}
                            location={card.location}
                            languages={card.languages}
                            tools={card.tools}
                            childCallback={props.parentCallback}
                            childCallback2={props.parentCallback2}
                            childCallback3={props.parentCallback3}
                        />
                    )
                })
            }
        </div>
    )
}

export default JobsList;