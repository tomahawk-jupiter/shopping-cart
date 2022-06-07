# Shopping Cart

A mock shopping cart site. An Odin Project assignment.

[Live Demo](https://tomahawk-jupiter.github.io/shopping-cart/)

## Github pages host

Create the gh-pages branch with just the build folder:

    $ git subtree push --prefix build origin gh-pages

Add this to package json to make it work when using create react app:

    "homepage": "https://tomahawk-jupiter.github.io/shopping-cart/",

## gh-pages package

    $ npm i -D gh-pages

Scripts:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

Deploy:

    $ npm run deploy

This should build the folder and push to the gh-pages branch.
