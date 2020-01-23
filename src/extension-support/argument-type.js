/**
 * Block argument types
 * @enum {string}
 */
const ArgumentType = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',

    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',

    /**
     * Numeric value with color picker
     */
    COLOR: 'color',

    /**
     * Numeric value with text field
     */
    NUMBER: 'number',

    /**
     * String value with text field
     */
    STRING: 'string',

    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',

    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',
    
    /**
     * Sliding bars represented by a list of numbers that add up to 100.
     */
    SLIDER: 'slider',

    /**
     * Markov distribuions with sliders
     */
    MARKOV: 'markov',

    /**
     * Dropdown Menu for Dice
     */
    DICEDROPDOWN: 'dicedropdown'
};

module.exports = ArgumentType;
