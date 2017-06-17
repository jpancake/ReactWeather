module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
	      "no-tabs": 0,
	      "react/jsx-indent": 0,
	      "react/jsx-indent-props": 0,
	      "class-methods-use-this": 0,
	      "no-trailing-spaces": ["error", { "skipBlankLines": true}],
	      "comma-dangle": 0,
	      "no-mixed-spaces-and-tabs": 0,
	      "arrow-body-style": 0,
	      "no-underscore-dangle": 0,
	      "jsx-a11y/img-has-alt": 0,
	      "import/no-extraneous-dependencies": 0,
	      "import/newline-after-import": 0,
	      "import/extensions": 0,
	      "import/no-unresolved": 0,
        "import/first": 0,
    }
};