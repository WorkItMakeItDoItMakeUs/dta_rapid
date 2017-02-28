test: check-todos
	yarn run lint

check-todos:
	@./_build_scripts/code_check.sh

