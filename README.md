# cachehive.guthub.io
#### The corporate webpage of the CacheHive Company.
created:  January 25, 2017

CacheHive.com is built with React
=================================

##To build the website for deployment

1) Clone this repository.

```
$ git clone git@github.com/cachehive/cachehive.github.io.git
```

2) Run the command to setup dependencies: 
```
$ npm install  <-- may need to use sudo.
```

3) Run the command to transpose to javascript:
```
$ webpack -w 
```

4) Run browser-sync from the root directory to serve the website locally.

method 1) $npm run dev
method 2) $browser-sync start --server --directory --files '*/**'

5) Visit [http://localhost:3000/](http://localhost:3000/)
      or [http://localhost:8080/](http://localhost:8080/) in your browser.

> Tip: Commas and quotes are important when writing JSON. Follow the same structure as the sample data to avoid syntax issues.

## Publishing & Deploying

The CacheHive website is initially deployed to GitHub Pages.
The only requirement is that the website's files will be stored at the root directory of the repository.

## License

TBD