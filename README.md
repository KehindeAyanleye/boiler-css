# Boiler-CSS

Another responsive front-end framework. It's like other responsive front-end frameworks, but not. Written in LESS.

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
```html
<nav class="navbar-container" role="navigation">
    <ul class="navbar">
        <li class="navbar-item">
            <a href="/">Home</a>
        </li>
        <li class="navbar-item">
            <a href="/lists">Lists</a>
        </li>
        <li class="navbar-item">
            <a href="/lists/new">New List</a>
        </li>
        <li class="navbar-item">
            <a href="/about">About</a>
        </li>
    </ul>
</nav>
```

## Now Rock Out!
