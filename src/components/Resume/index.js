import React from 'react';
import resume from '../Resume/ResumeGSE.txt';



function Resume() {
    return (
        <section className="projects">
            <div className="resumeDownload">
                <a href={resume} className="href" download>Click to download resume</a>
            </div>
        </section>

    )
}

export default Resume;