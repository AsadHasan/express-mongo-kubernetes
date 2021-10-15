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

## To deploy and run

Use either of following 2 options:

1. `Docker-compose` (for local dev): Run `docker-compose run --rm express` (requires [`docker-compose`](https://docs.docker.com/compose/))
2. [`Kubernetes`](https://kubernetes.io/): (Requires [`Helm`](https://helm.sh) and an available Kubernetes cluster) 1. Package a Helm chart: `helm package helm/ -d charts/` (creates chart in new `./charts` directory) 2. Install the Helm chart: `helm install express-mongo-release charts/express-mongo-0.0.1.tgz` (creates Helm release `express-mongo-release` on available cluster. Caveat: Have tested this _only_ on [`minikube`](https://minikube.sigs.k8s.io/docs/) locally, _not_ on _any_ cloud (AWS, GCP etc) cluster!)

## Testing

Basic end-to-end tests exist in `tests` folder, that can be run via the `npm run e2e-tests` script (requires `docker-compose`). Tests call the API via [`Axios`](https://axios-http.com/) and run via [`ts-jest`](https://github.com/kulshekhar/ts-jest).

## Issues

`Helm` chart has been created (via [Kompose](https://kompose.io/)). It can be packaged and installed on `Kubernetes`, however Mongo does not store data in a persistent volume or similar.
