import React from 'react';

function Nav(props) {

    const options = ['AboutMe', 'Projects', 'Resume', 'ContactMe'];

    return (
        <header>
            <div>
                <h2>
                    {props.currentCategory}
                </h2>
            </div>
            <div>
                <nav>
                    <ul>
                        {options.map(thang => (
                            < a
                                href={'#' + thang.toLowerCase()}
                                onClick={() => props.setCurrentCategory(thang)}
                                key={thang}
                            >
                                {thang}
                            </a>
                        ))}
                    </ul>
                </nav>

            </div>
        </header >
    );
}

export default Nav;
