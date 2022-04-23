const fs = require("fs");
const themeMetaDataBlob = fs.readFileSync("themes-storybook.json");
const themeMetaData = JSON.parse(themeMetaDataBlob);

const headerHTML = `
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&family=IBM+Plex+Sans:wght@300;400;600;700&family=IBM+Plex+Serif:wght@300;400;600;700&display=swap"
        rel="stylesheet"
    />
    ${themeMetaData.map(
      (themeMeta) =>
        `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MightyDevKnight/ft-plugin@latest/${themeMeta.path}" />`
    )}
`;

fs.writeFileSync('.storybook/manager-header.html', headerHTML, "utf-8");
fs.writeFileSync('.storybook/preview-header.html', headerHTML, "utf-8");