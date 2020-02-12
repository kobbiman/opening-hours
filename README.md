# React Opening Hours

The app reads restaurant opening hours from a mock api created under /src/pages/api. The api reads data from a mockdb stored in the /mockdb directory. It randomly grabs an opening hours from a collection of opening hours.

Supports the file format described in the schema file. There is a helper file in /src/lib/helpers.js that contains methods to converts the data to a format that is straightforward to render on the client side.

This project is built with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Development

This project has been developed with the following versions of `node` and `yarn`.

```sh
$ node -v
v13.1.0

$ yarn -v
1.21.1
```

## How to use

Clone the project:

```sh
git clone git@github.com:kobbiman/opening-hours.git
```

Install it and run:

Dev

```bash
yarn
yarn dev
# or
npm install
npm run dev
```

Open the app

[http://localhost:3000](http://localhost:3000)

Test

```bash
yarn test
# or
npm run test
```

Production

```bash
yarn build
yarn start
# or
npm run build
npm run start
```

## Run Storybook

```bash
yarn storybook
# or
npm run storybook
```

## Build Static Storybook

```bash
yarn build-storybook
# or
npm run build-storybook
```

Deploy Storybook to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
npm run build-storybook
# or
yarn build-storybook
# then
cd storybook-static
now
```
