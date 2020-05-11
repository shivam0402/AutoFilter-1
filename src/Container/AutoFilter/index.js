import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function AutoFilter(props) {

    let sportsArray = [
        { id: 1, name: "cricket" },
        { id: 2, name: "football" },
        { id: 3, name: "golf" },
        { id: 4, name: "table-tennis" },
        { id: 5, name: "badminton" },
        { id: 6, name: "pool" },
        { id: 7, name: "baseball" },
        { id: 8, name: "basketball" }
    ];

    const displaySportsList = () => {
        return (
            sports.map(listItem => (
                <li key={listItem.id}> {listItem.name} </li>
            ))
        )

    }

    const [sports, setSports] = useState([]);

    useEffect(() => {
        setSports(sportsArray);
    }, [])

    function handleChange(e) {
        console.log('change', e.target.value)

        const filteredValues = sportsArray.filter((sportName) =>
            sportName.name.toLowerCase().indexOf(e.target.value) > -1
        )
        setSports(filteredValues)

    }


    return (
        <>
            <h1> AutoFilter by React </h1>

            <input
                type="text"
                onChange={handleChange}
            />

            {sports && sports.length ? displaySportsList() : <p>No Item Found</p>}

        </>
    )
}




export default AutoFilter;