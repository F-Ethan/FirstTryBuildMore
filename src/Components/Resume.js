import React, { useState } from 'react';
import doc1 from '../Documents/Resume.pdf'
import doc2 from '../Documents/StyledResume.pdf'


const Resume = () => {
    let [style, setStyle] = useState(false);

    const Change = () => {
        console.log("my change")
        setStyle(style = !style)
    }
    return (
        <div className='About container shadow-lg p-3 mb-5 mt-3 rounded col-12 col-md-10'>
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">Choose a resume formate</li >
                <li className="nav-item">
                    {style ?
                        <a onClick={Change} className="nav-link">Styled</a> :
                        <a onClick={Change} className="nav-link active">Styled</a>
                    }
                </li>
                <li className="nav-item">
                    {!style ?
                        <a onClick={Change} className="nav-link">Simple</a> :
                        <a onClick={Change} className="nav-link active">Simple</a>
                    }
                </li>
            </ul>
            <div className="row">
                {style ?
                    <div className="col-12">
                        <div className='card justify-content-center'>
                            <embed src={doc1} type="application/pdf" width="100%" height="800px" />
                        </div>
                    </div>
                    :
                    <div className="col-12">
                        <div className='card justify-content-center'>
                            <embed src={doc2} type="application/pdf" width="100%" height="800px" />
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}


export default Resume;