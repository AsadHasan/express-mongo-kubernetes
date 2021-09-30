# Express Mongo Service

A basic API, built using [Express](https://expressjs.com/) server and [MongoDB](https://www.mongodb.com/) database (with [Mongoose](https://mongoosejs.com/) ORM), bootstrapped using [Google Typescript Style-guide](https://github.com/google/gts). It contains following endpoints:

1. `GET /testcases`: Returns list of existing test cases.
2. `POST /test-case`: Creates a test case, based on following request body:

```
{
    "name": string,
    "summary": string,
    "description": string
}
```

## To run locally

Run `docker-compose up` (requires `docker-compose`)

## Testing

Basic end-to-end tests exist in `tests` folder, that can be run via the `npm run e2e-tests` script (requires `docker-compose`). Tests call the API via `Axios` and run via `ts-jest`.

## Issues

`Helm` chart has been created (via [Kompose](https://kompose.io/)). It can be packaged and installed on `Kubernetes`, however the service does not yet work on Kubernetes (Express server container unable to connect to Mongo) and needs fixing.
