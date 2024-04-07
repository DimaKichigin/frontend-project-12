lint-frontend:
	make -C frontend lint

install:
	npm ci && cd ./frontend && npm install

start-frontend:
	make -C frontend start

start-backend:
	npx start-server

start:
	make start-backend & make start-frontend

build:
	rm frontend/build -rf
	npm run build