
import CoursesItem from "./icons/courses.svg";
import ServicesItem from "./icons/servises.svg";
import BooksItem from "./icons/books.svg";
import ProductsItem from "./icons/products.svg";
import { TopLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses },
    { route: 'servises', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Servises },
    { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsItem />, id: TopLevelCategory.Products },
]