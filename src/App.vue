<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg bg-primary shadow-sm">
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
            <ul class="navbar-nav w-100" id="ul">

                <li class="nav-item active" style="cursor:pointer">
                    <a class="nav-link ">
                        <router-link  to="/">Create User</router-link>
                    </a>
                </li>
                <li class="nav-item active " style="cursor:pointer" >
                    <a class="nav-link">
                        <router-link  to="/users">Users</router-link>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
 
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#ul a {
  font-weight: bold;
  color: white;
}
#ul a.router-link-exact-active {
  color: white;
  border: 1px solid white;
  padding:10px;
}
</style>
