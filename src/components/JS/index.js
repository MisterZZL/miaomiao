import Vue from 'vue'
import MessageBox from './MessageBox'

export let messageBox = (function () {
    return function (options) {

        let defaults = { //默认值
            title: '',
            content: '',
            cancel: '',
            ok: '',
            handleCancel: null,
            handleOk: null
        };
        // extend构造器生成一个Vue类MyComponent 
        let MyComponent = Vue.extend(MessageBox);
        //传入的参数赋值到default上
        for (let attr in options) {
            defaults[attr] = options[attr]
        }
        // 一个Vue组件实例
        let vm = new MyComponent({
            el: document.createElement('div'),
            data() {
                return {
                    title: defaults.title,
                    content: defaults.content,
                    cancel: defaults.cancel,
                    ok: defaults.ok
                }
            },
            methods: { //下面两个方法需要调用组件是作为参数传入
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        })
        document.body.appendChild(vm.$el);
    }
})()