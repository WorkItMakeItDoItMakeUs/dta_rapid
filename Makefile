test: check-code
	yarn run lint

check-code:
	@./_build_scripts/code_check.sh

