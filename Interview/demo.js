// 观察着
function observer(value) {
    if (!value || typeof value !== 'object') {
        return
    }

    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key])
    })
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        get: function () {
            return val;
        },
        set: function (newVal) {
            if (newVal === val) {
                return
            }
            val = newVal
            cb(val)
        }
    })
}

function cb(val) {
    console.log("视图更新啦～", val);
}

class Vue {
    constructor(options) {
        this._data = options.data
        observer(this._data)
    }
}

let o = new Vue({
    data: {
        test: 'test'
    }
})

o._data.test = 'hello test'