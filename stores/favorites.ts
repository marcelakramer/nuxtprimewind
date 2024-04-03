export const useFavoriteStore = defineStore("favorites", () => {
    const favorites = ref<[]>([]);
    
    return { favorites };
})