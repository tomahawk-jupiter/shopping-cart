# Shopping Cart

A mock shopping cart site using React Router. An Odin Project assignment.

[Live Demo](https://tomahawk-jupiter.github.io/shopping-cart/)

## Contents

- [Start App Locally](#start-app-locally)
- [GitHub Pages Hosting](#github-pages-hosting)
- [Create gh-pages Branch](#create-gh-pages-branch)
- [gh-pages package](#gh-pages-package)
- [Trouble Shooting React Router Routes](#trouble-shooting-react-router-routes)
- [Parent / Wrapper Route](#parent--wrapper-route)
- [Child / nested routes](#child--nested-routes)
- [Links](#links)

## Start App locally

First install the dependencies:

    $ npm install

Then start in Dev mode locally:

    $ npm start

## Quick Overview

The `App.js` handles the routing and the functionality. The `NavBar.js` is the main layout component where the other components are rendered into.

## GitHub Pages Hosting

### Create gh-pages Branch

Create the gh-pages branch with just the build folder:

    $ git subtree push --prefix build origin gh-pages

Add this to package json to make it work when using create react app:

    "homepage": "https://tomahawk-jupiter.github.io/shopping-cart/",

### gh-pages package

This can be used to build the build folder and push it to the gh-pages branch. Doesn't require committing changes to the main branch first.

    $ npm i -D gh-pages

Scripts:

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

Deploy:

    $ npm run deploy

This should build the folder and push to the gh-pages branch.

It still works if the build folder is in the top level `.gitignore`.

[Page Top](#shopping-cart)

## Trouble Shooting React Router Routes

To get React Router working properly in github pages is confusing, but I got it working!

This in the package.json, just like above:

    "homepage": "https://tomahawk-jupiter.github.io/shopping-cart/",

### Parent / Wrapper Route

This for the parent route:

    path="/shopping-cart/"

...not this:

    path="/"

This route is the one that renders the navbar and the Outlet where the other components are rendered when their routes are matched.

### Child / nested routes

Nested / child routes:

    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="shop" element={<Shop />} />

...not:

    path="/home"

### Links

The links:

    <Link className="nav-link" to="home">
      HOME
    </Link>

...not to="/home"

### UseNavigate

This seems to work:

    navigate("/shopping-cart/shop");

This didn't work:

    navigate("shop");

It went to shopping-cart/shop/shop.

[Page Top](#shopping-cart)
