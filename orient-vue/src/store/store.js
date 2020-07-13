import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/route'
Vue.use(Vuex);

const state = {
    ruleForm: {
        user:'',
        pwd:''
    },
    result:null,
    title:''
};
const mutations={
    setLogin(state,param){
        state.result=param.result
    },
    setUser(state,n){
        state.ruleForm.user=n
    },
    setPwd(state,n){
        state.ruleForm.pwd=n
    },
}
const actions={
    getLogin(context){
        this.$api.Login().then(res => {
            console.log(res.data);
            context.commit('setLogin',{result:res.data})
            let len = res.data.length;
            let userNameArr = [];
            let passWordArr = [];
            let ses = window.sessionStorage;
            for (var i = 0; i < len; i++) {
                userNameArr.push(res.data[i].username);
                passWordArr.push(res.data[i].password);
            }
            if (userNameArr.indexOf(state.ruleForm.user) === -1) {
                alert("账号不存在！");
            } else {
                var index = userNameArr.indexOf(state.ruleForm.user);
                if (passWordArr[index] === state.ruleForm.pwd) {
                    // 把token放在sessionStorage中
                    ses.setItem("data", res.data[index].token);
                    console.log(ses,'ses')
                    state.title=res.data[index].usertitle
                    //跳转到首页
                    router.push("/");
                } else {
                    alert("密码错误！");
                }
            }
        });
    },
    loginOut(){
        // 注销后 清除session信息 ，并返回登录页
        window.sessionStorage.removeItem('data');
        router.push('/login');
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})

