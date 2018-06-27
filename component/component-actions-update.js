// 将component的actions更改为组件衍生类的原型方法
am.class ( "CustomComponent" ).extends ( am.Component ) ( {
	constructor () {
		this.__super ();
		this.depComponents = [ depComp1, depComp2 ];
	},
	init () {
		return {};
	},
	mounted () {},
	updated () {},
	render () {
		this.template ( `
			// ...
		` )
		.style ( {
			// ...
		} );
	},
	unmount () {},
	customMethodOne () {},
	customMethodTwo () {},
	customMethodThree () {}
	// ...
} );

// ES6写法
class CustomComponent extends am.Component {
	constructor () {
		super ();
		this.depComponents = [ depComp1, depComp2 ];
	}
	init () {
		return {};
	}
	mounted () {}
	updated () {}
	render () {
		this.template ( `
			// ...
		` )
		.style ( {
			// ...
		} );
	}
	unmount () {}
	customMethodOne () {}
	customMethodTwo () {}
	customMethodThree () {}
	// ...
}