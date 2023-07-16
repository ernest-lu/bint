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
		client: {"start":"_app/immutable/entry/start.0933884d.js","app":"_app/immutable/entry/app.edd272b3.js","imports":["_app/immutable/entry/start.0933884d.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/singletons.7005e3a8.js","_app/immutable/chunks/index.dbaf3515.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.edd272b3.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/index.6451611a.js"],"stylesheets":[],"fonts":[]},
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
