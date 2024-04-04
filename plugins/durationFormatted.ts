export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('duration-formatted', {
        mounted(el) {
            const duration = ref(el.innerText);
            el.innerHTML = formatDuration(duration.value);
        }
    });
});

const formatDuration = (duration: string) => {
    const minsAndSecs = duration.split(":");
    return +minsAndSecs[0] !== 0 ? `${minsAndSecs[0]}m${minsAndSecs[1]}s` : `${minsAndSecs[1]}s`
}