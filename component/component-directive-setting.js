// 在组件上使用指令后，组件内部通过:directive指令动态绑定指令到元素上
// :if、:else-if、:else、:for、@ref、@key指令将不会被传入组件内
// 普通模式下的写法
am.class ( "FrameMotion" ).extends ( am.Component ) ( {
	init () {
		this.propsType ( {
			size: /\d+[A-Za-z]+\s*\*\s*\d+[A-Za-z]+/,
			src: String,
			number: Number
		} );

		return {
			current: 0,
			setDirectives ( directives ) {
				const bindDirectives = {
					model: directives.model
				};

				// 将组件外部传入的非onstart、onend的事件指令绑定到此元素上
				for ( const key in directives ) {
					if ( /^on/.test ( key ) && !/^onstart|onend$/.test ( key ) ) {
						bindDirectives [ key ] = directives [ key ];
					}
				}
				return bindDirectives;
			}
		};
	},
	render () {
		const size = this.props.size.split ( "*" );
		const directives = {
			onstart: () => { /* TODOS */ },
			model: () => {}
		}

		// 组件视图中可通过directives来接收组件外部传入的指令，并通过:directive指令动态绑定到想要绑定的元素上
		// 这样就可在组件内部控制外部传入的指令需要具体作用到哪个元素上
		// :directive可接收Object和Function，当值为Object时：
		// {
		// 		model: "inputValue"  // 表示将inputValue双向绑定到某元素上，不需要指定指令的类型，amaple会在指令列表检索，如果没有找到指令则会报错
		// 		...
		// }
		// 当值为Function时，需返回一个如上的指令集Object，表示动态绑定的指令
		this.template (  `<i class="frame-motion" :directive="() => setDirectives ( directives )"></i>`  )
		.style ( {
			".frame-motion": {
				width: size [ 0 ],
				height: size [ 1 ],
				backgroundImage: `url (${ this.props.src })`,
				backgroundRepeat: `no-repeat`,
				backgroundPosition: size.join ( " " )
			}
		} );
	},
	getCurrent: () => this.state.current,
	forward ( start ) {
		this.directives.onstart ();

		// TODOS
		this.directives.onend ();
	},
	reverse ( start ) {
		this.directives.onstart ();

		// TODOS
		this.directives.onend ();
	}
} );