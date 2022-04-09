import React from "react";
import cn from "classnames";
import { PProps } from "./Tag.props";
import styles from "./Tag.module.css"

export const Tag = ({children, size='m', color='ghost', className, href, ...props}: PProps): JSX.Element => {
    return (
        <>
        <div className={cn(styles.tag, className, {
            [styles.m]: size == "m",
            [styles.l]: size == "s",
            [styles.ghost]: color == "ghost",
            [styles.red]: color == "red",
            [styles.grey]: color == "grey",
            [styles.green]: color == "green",
            [styles.primary]: color == "primary",
        })}
        {...props}>
           {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
        </>
    )
}

