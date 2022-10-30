
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="bg-deep-purple" permanent>
      <v-container>
        <v-list-item-title class="text-h6">
          Menu Utama
        </v-list-item-title>
        <v-list-item-subtitle>
          pilih halaman disini
        </v-list-item-subtitle>
      </v-container>
      <v-divider></v-divider>
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Klinik Karunia Sehat</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>