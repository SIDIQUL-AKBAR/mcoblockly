// 1. Inject the block editor into the UI container
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
  trashcan: true
});

// 2. Automatically generate and preview code on any block changes
function updateCodePreview() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('codePreview').innerText = code || "// Drag and snap blocks to generate code!";
}
workspace.addChangeListener(updateCodePreview);

// 3. Securely interpret and execute the blocks
document.getElementById('runBtn').addEventListener('click', () => {
  window.LoopTrap = 1000; // Prevent accidental infinite browser-crashing loops
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop detected!";\n';
  
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    // Executes the visual block code natively
    eval(code); 
  } catch (e) {
    alert("Execution Error: " + e);
  }
});
