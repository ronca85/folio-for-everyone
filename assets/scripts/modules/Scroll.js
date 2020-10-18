import LocomotiveScroll from 'locomotive-scroll';
import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        this.scroll = new LocomotiveScroll({
            el: this.el,
            smooth: true,
            // smoothMobile: true,
            // touchMultiplier: 1,
            lerp: 0.075,
        });

        this.scroll.on('call', (func,way,obj,id) => {
            // Using modularJS
            this.call(func[0],{way,obj},func[1],func[2]);
        });

        this.scroll.on('scroll', (args) => {
            // console.log(args.scroll);
        })
    }

    toggleLazy(args) {
        let src = this.getData('lazy', args.obj.el)
        if(src.length) {
            if(args.obj.el.tagName == "IMG") {
                args.obj.el.src = src
            } else {
                args.obj.el.style.backgroundImage = `url(${src})`
            }
            this.setData('lazy', '', args.obj.el)
        }
    }

    destroy() {
        this.scroll.destroy();
    }
}
