export const settings= {
    "modelsFolder": "/models",
    "enlargeByTypes": [1.2, 2, 1, 1, 1.5],
    "default": {
        "enlarge": 1.2,
        "mask": {widthAdjust: 1.18, uriL: './red160px.png', uriR: './redr160px.png', comment: "Width Adjust: noggles width(160), noggles holder(30),due expand 1/5 for better output"},
        "confidence": 0.3,
        "flip": true,
        "showMask":true,
        "showLM":false
    },
   
}

export enum maskTypes {"byFaceEyesWidth","byEyesMiddle", "byFaceWidth", "fullFace", "overTheHead"}