import http from '@/api'

const state = {
    username: '',
    userId: 0,
    isLogin: false,
    email: '',
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : null
}

const getters = {
    avatar: state => state.username.toUpperCase().substring(0, 1)
}

const mutations = {
    
    // 有用
    COMMIT_USERNAME(state, username) {
        state.username = username
    },
    // 有用
    COMMIT_EMAIL(state, email) {
        state.email = email
    },
    // 有用
    COMMIT_LOGIN(state, payload) {
        state.Authorization = payload.token
        state.userId = payload.id
        if (payload.getInfo) {
            http.userApi.getUserInformation(state.userId).then(res => {
                if (res.errCode == "00") {
                    this.commit('COMMIT_USERNAME', res.data.username)
                    this.commit('COMMIT_EMAIL', res.data.email)
                }
            })
        }
        state.isLogin = true
    },
    COMMIT_LOGOUT(state) {
        state.isLogin = false
        state.email = ''
        state.userId = 0
        state.username = ''
        state.Authorization = ''
    }
}

const actions = {
    
    // 有用
    login({ commit, state }, payload) {
        localStorage.setItem('userId', payload.id)
        localStorage.setItem('Authorization', payload.token)
        payload.getInfo = true
        commit('COMMIT_LOGIN', payload)
    },
    logout({ commit }) {
        localStorage.setItem('userId', '')
        localStorage.setItem('Authorization', '')
        commit('COMMIT_LOGOUT')
    },
    SET_USER_INFO({ commit }, payload) {
        commit('COMMIT_USERNAME', payload.username)
        commit('COMMIT_EMAIL', payload.email)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
