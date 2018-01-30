ice.startRouter ( {
	// history : ice.BROWSER,
	// history : ice.HASH,
	baseURL : "module",
	routes : function ( router ) {
		router.module ()
		.route ( [ "/", "/table" ], "index/table" )
		.route ( "/login", "login/login", childRouter => {
			childRouter.module ().route ( ":sub_sera", "login/sub_sera" );
		} )
		.route ( "/forget_pwd", "login/forget_pwd" )
		.route ( "/error404", "error/404" );

		
		router.module ( "tips" )
		.route ( [ "/", "/table" ], "index/sera" );

		// 设置404页面路径
		router.error404 ( "/error404" );
	}
} );