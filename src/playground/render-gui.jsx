import React from 'react';
import GUI from '../containers/gui.jsx';

const onClickGreenFlag = () => {
    console.log('SHARKMOD Project Started!');
};

const onVmInit = (vm) => {
    // Access full VM instance APIs
    console.log('Scratch VM initialized:', vm);
    
    // Example: Listening to VM events
    vm.on('PROJECT_LOADED', () => {
        console.log('Project loaded into VM');
    });
};

const App = () => (
    <GUI
        canEditTitle
        isPlayerOnly={false}
        onClickGreenFlag={onClickGreenFlag}
        onVmInit={onVmInit}
    />
);

export default App;
