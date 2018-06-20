//  在组件上使用指令后，组件内部如何绑定指令到某个元素上
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