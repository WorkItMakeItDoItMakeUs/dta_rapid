test: check-code
	yarn run lint

check-code:
	@./_build_scripts/code_check.sh

build:
	@./node_modules/.bin/browserify assets/js/main.js -s technologic > assets/js/bundle.js

run: build
	jekyll serve -w
