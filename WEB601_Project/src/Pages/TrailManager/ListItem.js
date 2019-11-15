import React from 'react';


//This is used to list the name and location of a listed trail
const ListItem = ({Name, Location,Description,}) => {
    return (
        <li className="list-group-item">
            {Name} {Location}
        </li>
    );
};

export default ListItem;