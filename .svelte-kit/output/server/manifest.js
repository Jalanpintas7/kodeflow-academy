export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitignore","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DcJP_7p6.js",app:"_app/immutable/entry/app.CEQair59.js",imports:["_app/immutable/entry/start.DcJP_7p6.js","_app/immutable/chunks/DmWnNmO3.js","_app/immutable/chunks/DczrQvZ7.js","_app/immutable/chunks/S2Oyxdp7.js","_app/immutable/entry/app.CEQair59.js","_app/immutable/chunks/DczrQvZ7.js","_app/immutable/chunks/COY4ROKi.js","_app/immutable/chunks/S2Oyxdp7.js","_app/immutable/chunks/I1M-dJc7.js","_app/immutable/chunks/C8_B-ZC4.js","_app/immutable/chunks/nd4PGHSd.js","_app/immutable/chunks/92OXFOAz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/color-preview",
				pattern: /^\/color-preview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/materi/automation",
				pattern: /^\/materi\/automation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/materi/design-ui-ux",
				pattern: /^\/materi\/design-ui-ux\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/materi/detail/arduino",
				pattern: /^\/materi\/detail\/arduino\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/materi/detail/canva",
				pattern: /^\/materi\/detail\/canva\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/materi/detail/construct3",
				pattern: /^\/materi\/detail\/construct3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/materi/detail/facebook-creator",
				pattern: /^\/materi\/detail\/facebook-creator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/materi/detail/figma",
				pattern: /^\/materi\/detail\/figma\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/materi/detail/flutterflow",
				pattern: /^\/materi\/detail\/flutterflow\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/materi/detail/instagram-creator",
				pattern: /^\/materi\/detail\/instagram-creator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/materi/detail/iot",
				pattern: /^\/materi\/detail\/iot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/materi/detail/marvel-app",
				pattern: /^\/materi\/detail\/marvel-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/materi/detail/microbit",
				pattern: /^\/materi\/detail\/microbit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/materi/detail/n8n",
				pattern: /^\/materi\/detail\/n8n\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/materi/detail/roblox-studio",
				pattern: /^\/materi\/detail\/roblox-studio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/materi/detail/scratch-automation",
				pattern: /^\/materi\/detail\/scratch-automation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/materi/detail/scratch",
				pattern: /^\/materi\/detail\/scratch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/materi/detail/thunkable",
				pattern: /^\/materi\/detail\/thunkable\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/materi/detail/tiktok-creator",
				pattern: /^\/materi\/detail\/tiktok-creator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/materi/detail/unity",
				pattern: /^\/materi\/detail\/unity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/materi/detail/zapier",
				pattern: /^\/materi\/detail\/zapier\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/materi/digital-marketing",
				pattern: /^\/materi\/digital-marketing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/materi/game-development",
				pattern: /^\/materi\/game-development\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/materi/iot-robotik",
				pattern: /^\/materi\/iot-robotik\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/materi/web-mobile-app",
				pattern: /^\/materi\/web-mobile-app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
