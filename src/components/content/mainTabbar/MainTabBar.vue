<template>
	<tab-bar>
		<tab-bar-item path="/home" activeColor="pink">
			<template v-slot:item-icon ><img src="~assets/img/tabbar/首页.svg" alt=""></template>
			<template v-slot:item-icon-active ><img src="~assets/img/tabbar/首页_active.svg" alt=""></template>
			<template v-slot:item-text><div>首页</div></template>
		</tab-bar-item>
		<tab-bar-item path="/category" activeColor="pink">
			<template v-slot:item-icon ><img src="~assets/img/tabbar/分类.svg" alt=""></template>
			<template v-slot:item-icon-active ><img src="~assets/img/tabbar/分类_active.svg" alt=""></template>
			<template v-slot:item-text ><div>分类</div></template>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="pink">
			<template v-slot:item-icon ><img src="~assets/img/tabbar/购物车.svg" alt=""></template>
			<template v-slot:item-icon-active ><img src="~assets/img/tabbar/购物车_active.svg" alt=""></template>
			<template v-slot:item-text ><div>购物车</div></template>
		</tab-bar-item>
		<tab-bar-item path="/profile" activeColor="pink">
			<template v-slot:item-icon ><img src="~assets/img/tabbar/我的.svg" alt=""></template>
			<template v-slot:item-icon-active ><img src="~assets/img/tabbar/我的_active.svg" alt=""></template>
			<template v-slot:item-text ><div>我的</div></template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	
	export default {
	  name: 'MainTabBar',
	  components: {
			TabBar,
			TabBarItem
	  }
	}
	
</script>

<style>
</style>
