
exports.BLACK = { r:   0, g:   0, b:   0 };
exports.WHITE = { r: 255, g: 255, b: 255 };

/** Produces a random color */
exports.random = () => ({
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255)
});
