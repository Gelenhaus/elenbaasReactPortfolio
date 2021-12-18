import React from 'react';



function Portfolio({ currentProjectPicture }) {
    const { name, description } = currentProjectPicture;
    return (
        <section>
            <h1 data-testid="h1tag">{name}</h1>
            <p>{description}</p>
            <div />
        </section>

    )
};

export default Portfolio;