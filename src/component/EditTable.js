ice.class ( "EditTable" ).extends ( ice.Component ) ( {
	init : function () {
		var thisModule = this;
		return {
			title : this.props.title,
			computed : {
				content : {
					get : function () {
						return thisModule.props.content;
					},
					set : function ( val ) {
						thisModule.props.content = val;
					}
				}
			},
			addData : function () {
				this.content.push ( ["6", "Jim", "img/a8.png", "32", "XiaoFeng street"] )
			}
		}
	},
	render : function () {
		this.template ( [
			'<table>',
				'<tr>',
					'<th :for="t in title">{{ t }}</th>',
				'</tr>',
				'<tr :for="trItem in content">',
					'<td :for="td in trItem">{{ td }}</td>',
				'</tr>',
			'</table>',
			'<button :onclick="addData">ADD</button>'
		].join ( "" ) )
		.style ( {
			"table td, table th" : {
				border : "solid 1px #ddd",
				padding : 10,
				margin : 0
			}
		} )
	}
} );