
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/color-preview" | "/demo" | "/demo/breadcrumb" | "/materi" | "/materi/automation" | "/materi/design-ui-ux" | "/materi/detail" | "/materi/detail/arduino" | "/materi/detail/canva" | "/materi/detail/construct3" | "/materi/detail/facebook-creator" | "/materi/detail/figma" | "/materi/detail/flutterflow" | "/materi/detail/instagram-creator" | "/materi/detail/iot" | "/materi/detail/marvel-app" | "/materi/detail/microbit" | "/materi/detail/n8n" | "/materi/detail/roblox-studio" | "/materi/detail/scratch-automation" | "/materi/detail/scratch" | "/materi/detail/thunkable" | "/materi/detail/tiktok-creator" | "/materi/detail/unity" | "/materi/detail/zapier" | "/materi/digital-marketing" | "/materi/game-development" | "/materi/iot-robotik" | "/materi/web-mobile-app";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/color-preview": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/breadcrumb": Record<string, never>;
			"/materi": Record<string, never>;
			"/materi/automation": Record<string, never>;
			"/materi/design-ui-ux": Record<string, never>;
			"/materi/detail": Record<string, never>;
			"/materi/detail/arduino": Record<string, never>;
			"/materi/detail/canva": Record<string, never>;
			"/materi/detail/construct3": Record<string, never>;
			"/materi/detail/facebook-creator": Record<string, never>;
			"/materi/detail/figma": Record<string, never>;
			"/materi/detail/flutterflow": Record<string, never>;
			"/materi/detail/instagram-creator": Record<string, never>;
			"/materi/detail/iot": Record<string, never>;
			"/materi/detail/marvel-app": Record<string, never>;
			"/materi/detail/microbit": Record<string, never>;
			"/materi/detail/n8n": Record<string, never>;
			"/materi/detail/roblox-studio": Record<string, never>;
			"/materi/detail/scratch-automation": Record<string, never>;
			"/materi/detail/scratch": Record<string, never>;
			"/materi/detail/thunkable": Record<string, never>;
			"/materi/detail/tiktok-creator": Record<string, never>;
			"/materi/detail/unity": Record<string, never>;
			"/materi/detail/zapier": Record<string, never>;
			"/materi/digital-marketing": Record<string, never>;
			"/materi/game-development": Record<string, never>;
			"/materi/iot-robotik": Record<string, never>;
			"/materi/web-mobile-app": Record<string, never>
		};
		Pathname(): "/" | "/color-preview" | "/color-preview/" | "/demo" | "/demo/" | "/demo/breadcrumb" | "/demo/breadcrumb/" | "/materi" | "/materi/" | "/materi/automation" | "/materi/automation/" | "/materi/design-ui-ux" | "/materi/design-ui-ux/" | "/materi/detail" | "/materi/detail/" | "/materi/detail/arduino" | "/materi/detail/arduino/" | "/materi/detail/canva" | "/materi/detail/canva/" | "/materi/detail/construct3" | "/materi/detail/construct3/" | "/materi/detail/facebook-creator" | "/materi/detail/facebook-creator/" | "/materi/detail/figma" | "/materi/detail/figma/" | "/materi/detail/flutterflow" | "/materi/detail/flutterflow/" | "/materi/detail/instagram-creator" | "/materi/detail/instagram-creator/" | "/materi/detail/iot" | "/materi/detail/iot/" | "/materi/detail/marvel-app" | "/materi/detail/marvel-app/" | "/materi/detail/microbit" | "/materi/detail/microbit/" | "/materi/detail/n8n" | "/materi/detail/n8n/" | "/materi/detail/roblox-studio" | "/materi/detail/roblox-studio/" | "/materi/detail/scratch-automation" | "/materi/detail/scratch-automation/" | "/materi/detail/scratch" | "/materi/detail/scratch/" | "/materi/detail/thunkable" | "/materi/detail/thunkable/" | "/materi/detail/tiktok-creator" | "/materi/detail/tiktok-creator/" | "/materi/detail/unity" | "/materi/detail/unity/" | "/materi/detail/zapier" | "/materi/detail/zapier/" | "/materi/digital-marketing" | "/materi/digital-marketing/" | "/materi/game-development" | "/materi/game-development/" | "/materi/iot-robotik" | "/materi/iot-robotik/" | "/materi/web-mobile-app" | "/materi/web-mobile-app/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}