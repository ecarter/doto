
test:
	@./node_modules/.bin/mocha

todo:
	@./bin/doto \
		--search ./ \
		--file TODO.md \
		--ignore test,node_modules,TODO.md

.PHONY: test todo
