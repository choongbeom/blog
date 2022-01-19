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
          mdiAlphaECircle,mdiVuejs,mdiGithub } from "@mdi/js";

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
          to: '/cpp/list'
        },
        {
          icon: mdiLanguageCsharp,
          title: 'C#',
          to: '/cshap/list'
        },
        {
          icon: mdiDatabase,
          title: 'DB',
          to: '/db/list'
        },
        {
          icon: mdiGithub,
          title: 'GitHub',
          to: '/github/list'
        },
        {
          icon: mdiLanguageJava,
          title: 'JAVA',
          to: '/java/list'
        },
        {
          icon: mdiDatabaseSync,
          title: 'JPA',
          to: '/jpa/list'
        },
        {
          icon: mdiLanguageJavascript,
          title: 'JavaScript',
          to: '/js/list'
        },
        {
          icon: mdiDatabaseSearch,
          title: 'QueryDSL',
          to: '/qdsl/list'
        },
        {
          icon: mdiVuejs,
          title: 'Vue',
          to: '/vue/list'
        },
        {
          icon: mdiAlphaECircle,
          title: 'ETC',
          to: '/etc/list'
        },

      ],
      /*
      menuItems: [
        {
          icon: 'mdi-login-variant',
          title: 'Signin',
          to: '/signin'
        },
        {
          icon: 'mdi-account-plus-outline',
          title: 'Signup',
          to: '/signup'
        }
      ],
      */
      miniVariant: false,
      title: 'Choong-beom Kim`s blog',
    }
  }
}
</script>