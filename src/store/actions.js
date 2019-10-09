import api from '@/api'

const actions = {
  async loadTraits ({ state, commit }, ids) {
    // We only need to load ids that are not already loaded.
    const notLoadedIds = ids.filter((id) => {
      return state.traits[id] === undefined
    })

    // Don't hit the api if there are no new traits to load.
    if (notLoadedIds.length >= 1) {
      const traits = await api.getTraits(notLoadedIds)
      commit('addTraits', traits)
    }
  },
}

export default actions