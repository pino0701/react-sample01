/// <reference types="vite/client" />
interface ImportMetaEnv {
    // add env variable
	readonly VITE_APP_TITLE: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}