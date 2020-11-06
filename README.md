## Run everything in one command

```sh
npm run all
```

> `.env` file is for testing purposes only. Add it to `.gitignore`.

## Run separately

- Install dependencies: `npm run deps`
- DB: `npm run db`
- API: `npm run api`
- Client: `npm run ui`

## Mongo shell

```sh
docker exec -it mongo-container-id mongo -u docker -p docker docker
```

## Testing UI

- Register and login
- Add some products
- Add products to cart and buy
- Checkout history
