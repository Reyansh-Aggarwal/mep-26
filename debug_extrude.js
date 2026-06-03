import fs from 'fs';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { ExtrudeGeometry } from 'three';

const rawData = fs.readFileSync('c:/Users/user/Documents/the_new_mep/src/assets/fonts/Clash_Display_Bold.json', 'utf8');
const fontData = JSON.parse(rawData);

const loader = new FontLoader();
const font = loader.parse(fontData);

const shapes = font.generateShapes('A', 1.0);
const geometry = new ExtrudeGeometry(shapes, {
    depth: 0.3,
    bevelEnabled: false
});

const pos = geometry.attributes.position;
console.log('--- Geometry Vertices for "A" ---');
console.log(`Total vertices: ${pos.count}`);

console.log('\nGroup 0 Vertices (Front & Back Faces):');
const group0 = geometry.groups[0];
for (let i = group0.start; i < group0.start + group0.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    console.log(`Vertex ${i}: x=${x.toFixed(4)}, y=${y.toFixed(4)}, z=${z.toFixed(4)}`);
}
