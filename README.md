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
$ sudo npm install babel-core@6.10.4 babel-loader@6.2.4 babel-preset-es2015@6.9.0 babel-preset-react@6.11.1 html- webpack-plugin@2.26.0 http-server@0.9.0 newrelic@1.28.3 react@15.2.1 react-bootstrap@0.30.7 react-burger-menu@2.0.2 react-dom@15.2.1 react-fontawesome@1.5.0 react-ga@2.1.2 react-modal@1.4.0 webpack@1.13.1 --save
```

3) Run the command to transpose to javascript:
```
$ webpack -w 
```

4) Run browser-sync from the root directory to serve the website locally.
```
$ browser-sync start --server --directory --files '*/**'
```

5) Visit [http://localhost:3000/](http://localhost:3000/) in your browser.

> Tip: Commas and quotes are important when writing JSON. Follow the same structure as the sample data to avoid syntax issues.

## Publishing & Deploying

The CacheHive website is deployed to GitHub Pages.
The only requirement is that the website's files will be stored at the root directory of the repository.

## License

TBD