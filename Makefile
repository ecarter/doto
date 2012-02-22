
all: test todo

test: test-unit

test-unit:
	@./node_modules/.bin/mocha

todo:
	@./bin/doto \
		--search ./ \
		--file TODO.md \
		--ignore test,node_modules,TODO.md

.PHONY: test test-unit todo
