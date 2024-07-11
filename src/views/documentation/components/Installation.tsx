import { Row } from 'antd';
import React from 'react';

const Installation = () => {
    return (
        <>
            <h2>Installation</h2>
            <h4>Environment Setup</h4>
            <p>Nara required some prerequisite, you many need to install the following tools before starting the app.</p>
            <ul>
                <li>Node.js</li>
                <li>Yarn</li>
            </ul>
            <h4>Installing Packages</h4>
            <p>Navigate to project root directory and execute npm install or yarn install to install all necessary dependencies.</p>
        </>
    );
};

export default Installation;