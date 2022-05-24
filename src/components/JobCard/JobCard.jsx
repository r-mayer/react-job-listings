

function JobCard(props) {
    return(
        <div className="card-container">
            <p>{props.id}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default JobCard;