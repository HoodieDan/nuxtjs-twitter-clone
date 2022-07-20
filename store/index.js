export const state = () => ({
    openTweet: false,
    selectedTweet: {}
})

export const mutations = {
    selectTweet(state, tweet) {
        state.selectedTweet = { ...tweet };
        state.openTweet = !state.openTweet;
    },
    closeTweet (state) {
        state.openTweet = false
    }
}