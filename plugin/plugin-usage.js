// amaple定义的接口使用
// am.implements将返回一个包含分别包含define/install函数的对象
// const ObjInterface = {
// 	str: String,
// 	count: Number,
// 	cb: Function
// };

// // define函数将使用implements中的检查数据检查此定义的数据，如通过则返回此数据，如检测失败则抛出错误原因
// const obj = am.implements ( ObjInterface ).define ( {
// 	str: "aa",
// 	count: 0,
// 	cb () {}
// } );
// class DemoClass {
// 	constructor () {
// 		this.str = "amaple";
// 	}
// 	cb () {}
// }
// // 类的检测，待思考...
// am.implements ( ObjInterface ).define ( DemoClass );

// /////////////////////////////////////////////
// // install函数将使用implements中的检查数据检查此定义的数据，如通过则安装此应用，如检测失败则抛出错误原因
// // 安装插件时，接口必须为am.interface中的值，否则将抛出错误
// am.implements ( am.interface.HTTP ).install ( {
// 	get () {
// 		// TODOS
// 	},
// 	post () {
// 		// TODOS
// 	},
// 	request () {
// 		// TODOS
// 	}
// } );


// // 如何实现一个接口，并使用此实现接口的对象
// const classInterface = {
// 	__strict__: false,

// 	str: String,
// 	counter: Number,

// 	// 接口方法
// 	constructor: Function,
// 	xxx: Function,
// 	yyy: Function
// };
// am.class ( "ImplClass" ).extends ( am.Component ).implements ( classInterface ) ( {
// 	constructor () {
// 		this.__super ();
// 		this.str = "amaplejs",
// 		this.counter = 0;
// 		// ...
// 	},
// 	xxx () {
// 		// TODOS
// 	},
// 	yyy () {
// 		// TODOS
// 	}
// } );

// router安装
am.install({

	// type可选值为:
	// 1.router：表示spa路由
	// 2.directive：表示指令，该指令可设置控制对象，通过控制对象操作对应元素
	// 3.globalState（暂定名）：表示全局的状态管理器
	// 4.不填写表示普通的插件，为am添加全局方法，am.Module、am.Component添加prototype方法，添加控制器都可以
	type: "router",
	build(am, options) {
		const 
			navigator = {},
			plugin = {};

		// ...
		return {
			helper: {
				navigator,
				getDOMLocation() {
					// ...
				},
				scrollTo() {
					// ...
				}
			},
			plugin
		};
	}
}, null);