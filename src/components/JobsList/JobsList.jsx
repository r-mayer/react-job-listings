import JobCard from "../JobCard/JobCard";

function JobsList() {

    const dados = [
        {
            id: 0,
            title: "Red Hot"
        },
        {
            id: 1,
            title: "Guns"
        },
        {
            id: 2,
            title: "Led Zepellin"
        },
        {
            id: 3,
            title: "Green Day"
        }
    ]

    return(
        <div className="jobs-list-container">
            {
                dados.map((card, index) => {
                    return (
                        <JobCard id={card.id} title={card.title} />
                    )
                })
            }
        </div>
    )
}

export default JobsList;