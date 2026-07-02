// Inject the Blockly workspace into the UI div
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    trashcan: true
});

// Update the side panel dynamically as blocks move
workspace.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codePreview').innerText = code || "// Drag blocks to generate code";
});

// Execute generated block strings using browser alert hooks
document.getElementById('runButton').addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // Safe evaluation loop for proof-of-concept visual builders
        eval(code); 
    } catch (e) {
        alert("Execution Error: " + e);
    }
});
