export function debounce(func, delay) {
    let timer = null;
    // let _this = this;
    return function (...args) {
        if (timer) clearTimeout(timer);
        // console.log(_this);
        timer = setTimeout(() => {
            //this在此指的是debounce的执行区域   undefined
            //return回来的这个函数中的this也就是指向直接调用return 函数那个对象
            func.apply(this, args);
            // func();
        }, delay);
    };
}