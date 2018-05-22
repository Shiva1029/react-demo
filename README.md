### Using

* React 16
* Webpack 3
* React Router 4
* SASS
* Babel Cli
* Hot Module Reloading
* Jest 21 
* Enzyme 3 for testing

### To run
Make sure you have node, npm and jest installed globally and accessible through the command line.
* Then install the dependencies:

```
npm i
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To login
email
```
test@test.com
```

password
```
demo
```


### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
npm run build
```

### Running build locally

```
npm run serve:build
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a `.eslint.rc` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```
