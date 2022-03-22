import React from 'react';

function Nav(props) {

    const options = ['AboutMe', 'Projects', 'Resume', 'ContactMe'];

    return (
        <header >
            <div className="outsideBox">
                <h2 class="container">
                    {props.currentCategory}
                </h2>
            </div>
            <div>
                <nav className="outsideBox">
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
                    <br></br>
                </nav>

            </div>
        </header >
    );
}

export default Nav;
