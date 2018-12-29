# React Native with Typescript

# Persiapan setup project
start project ikuti getting started di docs punya react native → https://facebook.github.io/react-native/docs/getting-started

**JANGAN DI RUN DULU !!!!**

install dependency buat typescript
`yarn add -D @types/expo @types/expo__vector-icons @types/react @types/react-native babel-preset-expo react-native-typescript-transformer tslib tslint tslint-config-prettier tslint-react typescript`

tambahkan config expo di `app.json`
```
"packagerOpts": {
  "sourceExts": [
    "ts",
    "tsx"
  ],
  "transformer": "node_modules/react-native-typescript-transformer/index.js"
}
```

rename `app.js` menjadi `app.tsx`

**Jalankan :D**
`yarn start`
