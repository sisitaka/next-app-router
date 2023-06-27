import { ReactNode } from "react";

export default function MarketingLayout({
    children,
}: {children:ReactNode,}){
    return <div className="m-4 font-bold">{children}</div>
} 
