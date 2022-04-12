export enum TopLevelCategory {
    Courses,
    Servises,
    Books,
    Products
}

export interface TopPageAdvantsge {
    _id: string;
    title: string;
    description: string;
}

export interface HhDate {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalaryunt: number;
    updatedAt: Date;
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tegsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: TopLevelCategory;
    advantages: TopPageAdvantsge[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhDate[];
}