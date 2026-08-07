// Replace the scratch-logo import around line 15 with your logo:
import sharkmodLogo from './sharkmod-logo.png';

// Inside the MenuBar render method, replace <img src={scratchLogo} /> with:
<img
    className={styles.scratchLogo}
    src={sharkmodLogo}
    alt="SHARKMOD Logo"
/>
