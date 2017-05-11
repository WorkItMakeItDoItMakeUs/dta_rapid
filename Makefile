test: check-code
	yarn run lint
	@./node_modules/.bin/mocha ./**/*.test.js

check-code:
	@./_build_scripts/code_check.sh

build:
	@./node_modules/.bin/node-sass src/sass/main.scss assets/css/style.min.css --output-style compressed
	#@./node_modules/.bin/browserify assets/js/main.js -s technologic > assets/js/bundle.js

run: build
	jekyll serve -w
