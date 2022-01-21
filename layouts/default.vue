<template>
  <v-app>

      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        disable-resize-watcher
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in naviItems"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="clipped"
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" @click.stop="drawer = false" v-text="title" />
      </v-app-bar>

      <v-main>
        <banner />
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer
        :absolute="!fixed"
        app
      >
        <span style="display: inline-block; width: 100%; text-align: center;">Choong-beom Kim &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

  </v-app>
</template>

<script>
// https://materialdesignicons.com/
import {  mdiHome,mdiInformation,mdiDatabase,
          mdiLanguageCpp,mdiLanguageCsharp,mdiLanguageJava,
          mdiLanguageJavascript,mdiDatabaseSync,mdiDatabaseSearch,
          mdiAlphaECircle,mdiVuejs,mdiGithub, mdiImageMultiple } from "@mdi/js";

export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      naviItems: [
        {
          icon: mdiHome,
          title: 'HOME',
          to: '/'
        },
        {
          icon: mdiInformation,
          title: 'About',
          to: '/about'
        },
        {
          icon: mdiLanguageCpp,
          title: 'C/C++',
          to: '/cpp/notuesed/list'
        },
        {
          icon: mdiLanguageCsharp,
          title: 'C#',
          to: '/cshap/notuesed/list'
        },
        {
          icon: mdiDatabase,
          title: 'DB',
          to: '/db/notuesed/list'
        },
        {
          icon: mdiGithub,
          title: 'GitHub',
          to: '/github/notuesed/list'
        },
        {
          icon: mdiLanguageJava,
          title: 'JAVA',
          to: '/java/notuesed/list'
        },
        {
          icon: mdiDatabaseSync,
          title: 'JPA',
          to: '/jpa/notuesed/list'
        },
        {
          icon: mdiLanguageJavascript,
          title: 'JavaScript',
          to: '/js/notuesed/list'
        },
        {
          icon: mdiDatabaseSearch,
          title: 'QueryDSL',
          to: '/qdsl/notuesed/list'
        },
        {
          icon: mdiVuejs,
          title: 'Vue',
          to: '/vue/notuesed/list'
        },
        {
          icon: mdiAlphaECircle,
          title: 'ETC',
          to: '/etc/notuesed/list'
        },
        {
          icon: mdiImageMultiple,
          title: 'Photo Gallery',
          to: '/etc/notuesed/list'
        }
      ],
      miniVariant: false,
      title: 'Choong-beom Kim`s blog',
    }
  }
}
</script>