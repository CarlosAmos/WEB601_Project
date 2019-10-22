import React from 'react';

const ListItem = ({Name, Location}) => {
    return (
        <li className="list-group-item">
            {Name} {Location}
        </li>
    );
};

export default ListItem;