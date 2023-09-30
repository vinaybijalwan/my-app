


function Profile(){
    const user = {
        name: "vinay",
        DOB: "01 July 1991",
        add: "Haridwar Uttrakhand", 
        Designation: "Data Analyst",
    
    };

    const programming = [
        {tilte: "JavaScript", id: 1},
        {tilte: "React", id: 2},
        {tilte: "python", id: 3},
        {tilte: "Django", id: 4},
        {tilte: "R", id: 5},
    ]
    const ListItems = programming.map(programming => 
        <li key ={programming.id}>
            {programming.tilte}
        </li>);
    return(
        <div>
           <h3>Name - {user.name}</h3>
           <h4>DOB - {user.DOB}</h4>
           <h5>Add - {user.add}</h5>
           <h5>Designation - {user.Designation}</h5>
            <ul>{ListItems}</ul>
        </div>
    )
}

export default Profile;