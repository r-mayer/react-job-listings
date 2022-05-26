import './JobCard.css';

function JobCard(props) {

    return(
        <div className="card-container">
            <div className="left-side">
                <img src={props.logo} alt="Company Logo" />
                <div className="company-info-container">
                    <p className="company-name">{props.company} {props.new && <span className='new'>NEW!</span>}{props.featured && <span className='featured'>FEATURED</span>}</p>
                    <h2 className="job-position">{props.position}</h2>
                    <p className="job-data">{props.postedAt}   ●   {props.contract}   ●   {props.location} </p>
                </div>
            </div>
            <div className="right-side">
                <div className="categories-container">
                    {props.languages.map((item, index) => {
                        return <p key={index} className="categories" onClick={() => props.childCallback3(item)}>{item}</p>
                    })}
                    <p className="categories" onClick={() => props.childCallback(props.role)}>{props.role}</p>
                    <p className="categories" onClick={() => props.childCallback2(props.level)}>{props.level}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;