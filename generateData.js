const fs = require('fs');
const getFiles = (dir) => fs.readdirSync('public/' + dir).map(f => '/' + dir + '/' + f);
const data = `export const canvasImages = ${JSON.stringify(getFiles('canvas'))};
export const wallartImages = ${JSON.stringify(getFiles('wallart'))};
export const decorationImages = ${JSON.stringify(getFiles('decoration'))};
`;
fs.writeFileSync('app/components/marqueeData.ts', data);
