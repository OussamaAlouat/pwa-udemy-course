var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "env": {
        "es2015": true
    },
    "ecmaFeatures": {
        "modules": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-multi-spaces": ERROR,
        // Variables
        "init-declarations": OFF,
        "no-catch-shadow": WARN,
        "no-delete-var": ERROR,
        "no-label-var": ERROR,
        "no-undef-init": OFF,
        "no-undef": OFF,
        "no-undefined": OFF,
        "no-unused-vars": OFF,
        "no-var": OFF,
        "indent": [ WARN, 2 ],
        "block-spacing": [ WARN, "always" ],
        "comma-spacing": [ WARN, { "before": false, "after": true } ],
        "comma-style": [ WARN, "last" ],
        "quotes": [ WARN, "single" ],
        "semi-spacing": [ WARN, { "before": false, "after": true }],
        "semi": [ ERROR, "always" ],
        "spaced-comment": [ WARN, "always" ],
    }
};