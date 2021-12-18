import React, { useEffect } from 'react';

function Nav(props) {

    const {
        pictures = [],
        setCurrentProjectPicture,
        currentProjectPicture,
    } = props;

    useEffect(() => {
        document.title = currentProjectPicture.name;
    }, [currentProjectPicture]);


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
            </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {pictures.map((picture) => (
                        <li
                            className={`mx-1 ${currentProjectPicture.name === picture.name && 'navActive'
                                }`}
                            key={picture.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentProjectPicture(picture)
                                }}
                            >
                                {picture.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );


}

export default Nav;