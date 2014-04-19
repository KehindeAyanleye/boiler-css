# Boiler-CSS

**What is Boiler-CSS?**
* It's another responsive front-end framework.  
* It's like other responsive front-end frameworks, but not.  
* It's written in LESS.

I decided to build this because I wanted a framework that put a strong emphasis on semantics both in the HTML and the CSS, had all of the basic features necessary for bootstrapping a scalable web application, and didn't include a lot of bloat-code.

## Installation

```bash
bower install boiler-css
```

## Development
```base
$ git clone https://github.com/theponti/boiler-css.git

$ npm install

$ gulp
    /**
     * Will start a static server on port 4000 and will
     * start a gulp.watch task for all .less files in src
     * directory
     */
```

## Usage

### Navigation Bar

![Fixed Top Navigation Bar](./images/nav_bar.png)

```html
        <nav class="menu horizontal fixed-top full" role="navigation">
            <a href="#">Home</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <div class="no-v-pad right dropdown">
                <img class="inline small no-pad" src="mocks/images/user.png" alt="user's picture">
                <a class="inline pad-top-1 height-three" href="#">John Doe</a>
                <div class="dropdown-menu">
                    <a href="#">Profile</a>
                    <a href="#">Log Out</a>
                </div>
            </div>
        </nav>
```

## Now Rock Out!
