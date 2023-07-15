export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a8faed10.js","app":"_app/immutable/entry/app.8e1e5ac0.js","imports":["_app/immutable/entry/start.a8faed10.js","_app/immutable/chunks/scheduler.afdc9194.js","_app/immutable/chunks/singletons.8ad10468.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.8e1e5ac0.js","_app/immutable/chunks/scheduler.afdc9194.js","_app/immutable/chunks/index.a17f34e5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/paste/[id]",
				pattern: /^\/paste\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
