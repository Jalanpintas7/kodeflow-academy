export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/color-preview": [3],
		"/demo/breadcrumb": [4],
		"/materi/automation": [5],
		"/materi/design-ui-ux": [6],
		"/materi/detail/arduino": [7],
		"/materi/detail/canva": [8],
		"/materi/detail/construct3": [9],
		"/materi/detail/facebook-creator": [10],
		"/materi/detail/figma": [11],
		"/materi/detail/flutterflow": [12],
		"/materi/detail/instagram-creator": [13],
		"/materi/detail/iot": [14],
		"/materi/detail/marvel-app": [15],
		"/materi/detail/microbit": [16],
		"/materi/detail/n8n": [17],
		"/materi/detail/roblox-studio": [18],
		"/materi/detail/scratch-automation": [20],
		"/materi/detail/scratch": [19],
		"/materi/detail/thunkable": [21],
		"/materi/detail/tiktok-creator": [22],
		"/materi/detail/unity": [23],
		"/materi/detail/zapier": [24],
		"/materi/digital-marketing": [25],
		"/materi/game-development": [26],
		"/materi/iot-robotik": [27],
		"/materi/web-mobile-app": [28]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';