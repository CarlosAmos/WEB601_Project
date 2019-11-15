import React from 'react';

const ListEvent = ({ Name, Description }) => {
    console.log(Name,Description);
    return (
        <div>
            <h4>{Name}</h4>
            <p>{Description}</p>
        </div>
    );
};

export default ListEvent;