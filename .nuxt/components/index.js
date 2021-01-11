export { default as HomeCard } from '../..\\components\\HomeCard.vue'

export const LazyHomeCard = import('../..\\components\\HomeCard.vue' /* webpackChunkName: "components_HomeCard" */).then(c => c.default || c)
