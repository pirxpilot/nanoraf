BIN = node_modules/.bin

all: check

lint:
	$(BIN)/standard

check: lint test

test:
	$(BIN)/tape test.js

.PHONY: check lint all test
