/**
 * Renders the Work component.
 * @returns {JSX.Element} The rendered Work component.
 */
import React from "react";
import {WorkProvider} from "./WorkContext";
import Collapsible from "./Collapsible";

function Work() {
    return (
        <div className="work space-y-2">
            <h2 className='font-DMMono font-medium'>| Work</h2>
            <WorkProvider>
                <Collapsible/>
            </WorkProvider>
        </div>
    );
}

export default Work;