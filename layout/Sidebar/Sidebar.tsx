import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg"
import cn from "classnames"
import { Search } from "../../components";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <span className={styles.logo}>Мой Топ</span>
            <div>
                <Search />
            </div>
            <Menu />
        </div>
    )
}