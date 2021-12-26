import React from 'react';
import resume from '../Resume/ResumeGSE.txt';



function Resume() {
    return (
        <resume>
            <a href={resume} download>Click to download</a>

        </resume>
    )
}

export default Resume;