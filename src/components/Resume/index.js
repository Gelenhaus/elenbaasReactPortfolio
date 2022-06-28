import React from 'react';
import resume from '../Resume/GEResume2022 (1).pdf';



function Resume() {


    return (
        <section >

            <div className="custom">

                <button className="customBorder">
                    <a href={resume} download>Click to download resume</a>
                </button>

            </div>
        </section>

    )
}

export default Resume;