export interface IIterableItem {
    title?: string;
    link?: string;
    items?: IIterableItem[];
    icon?: string;
    description?: string;
}

export interface IHeaderData {
    logo: string;
    menu: IIterableItem[];
    cta: string;
}

export interface ILayoutData {
    headerData: IHeaderData;
    footerData: any;
}
