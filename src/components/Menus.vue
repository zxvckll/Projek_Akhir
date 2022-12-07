<script>
export default {
  props: ["menu"],
  data() {
    return {
      isMenuActive: true,
    };
  },
};
</script>
<template>
  <div class="border" v-if="menu.subMenu">
    <button
      @click="isMenuActive = !isMenuActive"
      class="py-2 px-4 hover:text-gray-900 inline"
    >
      {{ menu.title}}<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-3 h-3 inline "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
    <ul
      class="left-full top-0 w-max justify-center grid-cols-1 absolute bg-gray-100 text-gray-700"
    >
      <Menus
        :class="[isMenuActive ? 'hidden' : '']"
        v-for="(subMenu, index) in menu.subMenu"
        v-bind:key="index"
        :menu="subMenu"
      ></Menus>
    </ul>
  </div>
  <div v-else>
    <a  class="py-2 px-4 border hover:text-gray-900  block" href="">{{ menu.title }}</a>
  </div>
</template>
