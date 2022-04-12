import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
    return (
        <>
        {products && products.length}
        </>
    )
}