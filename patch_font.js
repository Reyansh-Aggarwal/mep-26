import fs from 'fs';

const fontPath = 'c:/Users/user/Documents/the_new_mep/src/assets/fonts/Clash_Display_Bold.json';
const rawData = fs.readFileSync(fontPath, 'utf8');
const fontData = JSON.parse(rawData);

function parseOutline(o) {
    const tokens = o.trim().split(/\s+/);
    const subPaths = [];
    let currentSubPath = [];
    
    let i = 0;
    while (i < tokens.length) {
        const cmd = tokens[i];
        if (cmd === 'm') {
            if (currentSubPath.length > 0) {
                subPaths.push(currentSubPath);
                currentSubPath = [];
            }
            const args = [parseFloat(tokens[i+1]), parseFloat(tokens[i+2])];
            currentSubPath.push({ type: 'm', args });
            i += 3;
        } else if (cmd === 'l') {
            const args = [parseFloat(tokens[i+1]), parseFloat(tokens[i+2])];
            currentSubPath.push({ type: 'l', args });
            i += 3;
        } else if (cmd === 'q') {
            const args = [
                parseFloat(tokens[i+1]), parseFloat(tokens[i+2]),
                parseFloat(tokens[i+3]), parseFloat(tokens[i+4])
            ];
            currentSubPath.push({ type: 'q', args });
            i += 5;
        } else if (cmd === 'b') {
            const args = [
                parseFloat(tokens[i+1]), parseFloat(tokens[i+2]),
                parseFloat(tokens[i+3]), parseFloat(tokens[i+4]),
                parseFloat(tokens[i+5]), parseFloat(tokens[i+6])
            ];
            currentSubPath.push({ type: 'b', args });
            i += 7;
        } else if (cmd === 'z') {
            // z is usually handled as close, we can just skip or absorb it since we append it on serialize
            i++;
        } else {
            // Skip unrecognized
            i++;
        }
    }
    if (currentSubPath.length > 0) {
        subPaths.push(currentSubPath);
    }
    return subPaths;
}

function getSubPathArea(subPath) {
    const points = [];
    let cx = 0, cy = 0;
    for (const seg of subPath) {
        if (seg.type === 'm' || seg.type === 'l') {
            cx = seg.args[0];
            cy = seg.args[1];
        } else if (seg.type === 'q') {
            cx = seg.args[2];
            cy = seg.args[3];
        } else if (seg.type === 'b') {
            cx = seg.args[4];
            cy = seg.args[5];
        }
        points.push([cx, cy]);
    }
    
    let area = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % n];
        area += p1[0] * p2[1] - p2[0] * p1[1];
    }
    return area / 2;
}

function reverseSubPath(subPath) {
    const points = [];
    let cx = 0, cy = 0;
    for (const seg of subPath) {
        if (seg.type === 'm' || seg.type === 'l') {
            cx = seg.args[0];
            cy = seg.args[1];
        } else if (seg.type === 'q') {
            cx = seg.args[2];
            cy = seg.args[3];
        } else if (seg.type === 'b') {
            cx = seg.args[4];
            cy = seg.args[5];
        }
        points.push([cx, cy]);
    }
    
    const reversed = [];
    const lastIdx = points.length - 1;
    reversed.push({ type: 'm', args: [points[lastIdx][0], points[lastIdx][1]] });
    
    for (let k = subPath.length - 1; k >= 1; k--) {
        const seg = subPath[k];
        const prevPt = points[k - 1];
        if (seg.type === 'l') {
            reversed.push({ type: 'l', args: [prevPt[0], prevPt[1]] });
        } else if (seg.type === 'q') {
            reversed.push({ type: 'q', args: [seg.args[0], seg.args[1], prevPt[0], prevPt[1]] });
        } else if (seg.type === 'b') {
            reversed.push({ type: 'b', args: [seg.args[2], seg.args[3], seg.args[0], seg.args[1], prevPt[0], prevPt[1]] });
        }
    }
    return reversed;
}

function serializeSubPaths(subPaths) {
    return subPaths.map(subPath => {
        return subPath.map(seg => {
            return `${seg.type} ${seg.args.join(' ')}`;
        }).join(' ') + ' z';
    }).join(' ');
}

let modifiedGlyphs = 0;

for (const char in fontData.glyphs) {
    const glyph = fontData.glyphs[char];
    if (glyph && typeof glyph.o === 'string') {
        const originalOutline = glyph.o;
        const subPaths = parseOutline(originalOutline);
        if (subPaths.length === 0) continue;
        
        // Sort sub-paths by absolute area descending.
        // The first one is the main outer contour, others are holes.
        const pathData = subPaths.map(path => {
            return {
                path,
                area: getSubPathArea(path)
            };
        });
        
        pathData.sort((a, b) => Math.abs(b.area) - Math.abs(a.area));
        
        let changed = false;
        
        // 1. Outer contour (largest area) should be counter-clockwise (area > 0)
        if (pathData[0].area < 0) {
            pathData[0].path = reverseSubPath(pathData[0].path);
            changed = true;
        }
        
        // 2. Holes should be clockwise (area < 0)
        for (let j = 1; j < pathData.length; j++) {
            if (pathData[j].area > 0) {
                pathData[j].path = reverseSubPath(pathData[j].path);
                changed = true;
            }
        }
        
        if (changed) {
            const newOutline = serializeSubPaths(pathData.map(pd => pd.path));
            glyph.o = newOutline;
            modifiedGlyphs++;
        }
    }
}

fs.writeFileSync(fontPath, JSON.stringify(fontData), 'utf8');
console.log(`Font patching complete. Replaced winding directions for ${modifiedGlyphs} glyphs.`);
