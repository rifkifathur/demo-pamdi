export {};

declare global {
	/**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
	interface RoutesType {
		key: string;
		name: string;
		path?: string;
		link?: JSX.Element;		
		icon?: JSX.Element | string;
		component?:  JSX.Element;
        children?: RoutesType[];
		sidebar: boolean;
		baseParent?: string;				
		isGroup?: string;
		groupItem?: RoutesType[];
	}
}