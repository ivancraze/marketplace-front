export interface IProductDetails {
    id: number;
    slug?: string;
    imgSrc: string;
    priceRegular: number;
    priceDiscounted?: number;
    title: string;
    desc: string;
}

export interface IAppStore {
    isLogged: boolean;
    isAppLoading: boolean;
}

export interface IUserData {
    id?: number | null;
    login?: string | null;
    email?: string | null;
    phone?: string | null;
    nameFirst?: string | null;
    nameLast?: string | null;
    namePatronymic?: string | null;
    displayName: string | null;
    birthDate?: string | null;
    gender?: Gender | null;
}

enum Gender {
    Male = 'm',
    Female = 'f',
}

export type IFavorites = number[];
