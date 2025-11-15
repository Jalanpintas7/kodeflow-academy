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
	() => import('./nodes/27')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/color-preview": [3],
		"/materi/automation": [4],
		"/materi/design-ui-ux": [5],
		"/materi/detail/arduino": [6],
		"/materi/detail/canva": [7],
		"/materi/detail/construct3": [8],
		"/materi/detail/facebook-creator": [9],
		"/materi/detail/figma": [10],
		"/materi/detail/flutterflow": [11],
		"/materi/detail/instagram-creator": [12],
		"/materi/detail/iot": [13],
		"/materi/detail/marvel-app": [14],
		"/materi/detail/microbit": [15],
		"/materi/detail/n8n": [16],
		"/materi/detail/roblox-studio": [17],
		"/materi/detail/scratch-automation": [19],
		"/materi/detail/scratch": [18],
		"/materi/detail/thunkable": [20],
		"/materi/detail/tiktok-creator": [21],
		"/materi/detail/unity": [22],
		"/materi/detail/zapier": [23],
		"/materi/digital-marketing": [24],
		"/materi/game-development": [25],
		"/materi/iot-robotik": [26],
		"/materi/web-mobile-app": [27]
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