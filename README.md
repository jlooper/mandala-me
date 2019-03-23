# Mandala Me - Web, iOS, and Android apps to build and display mandalas

![Demo](mme.gif?raw=true)

This app is presented in two versions - separate NativeScript-Vue apps in the `mobile` folder and a standalone web app in `web`, and then an app with shared code between web and native apps in the `combined` folder.

The combined app was built using the Vue CLI [Plugin](https://github.com/nativescript-vue/vue-cli-plugin-nativescript-vue) for code sharing with NativeScript and Vue.js. The web app is a standard web Vue app, and the mobile apps use [Nativescript-Vue](https://nativescript-vue.org/).

For more information about this plugin, please see its [README](https://github.com/nativescript-vue/vue-cli-plugin-nativescript-vue).

To get this project up and running, ensure that you have the [Vue-CLI 3](https://github.com/vuejs/vue-cli) installed.

## Running the project

You have several options to serve and build the project:

1.  `npm run serve:web`
2.  `npm run serve:android`
3.  `npm run serve:ios`
4.  `npm run build:web`
5.  `npm run build:android`
6.  `npm run build:ios`

### Debugging your project

You will have the standard options for debugging available to you as you would with just `tns`. You can do the following to debug Native versions of your app.

1.  `npm run debug:android`
2.  `npm run debug:ios`

> Note, this app uses Firebase; please use your own credentials to setup Firebase for your own project.
