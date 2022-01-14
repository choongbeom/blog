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

      <!-- 앱바 -->
      <v-app-bar
        :clipped-left="clipped"
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" @click.stop="drawer = false" v-text="title" />

        <!-- 분활처리 오른쪽 끝으로 정렬 -->
        <v-spacer />

        <v-menu
          left
          bottom
        >
          <template slot="activator" slot-scope="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in menuItems"
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
        </v-menu>

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
        <span style="display: inline-block; width: 100%; text-align: center;">cbkim &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      naviItems: [
        {
          icon: 'mdi-home',
          title: 'HOME',
          to: '/'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        }
      ],
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
      miniVariant: false,
      title: 'Choong-beom Kim`s blog'
    }
  }
}
</script>

<style scoped>
  .container{
    max-width: 100%;
  }
</style>