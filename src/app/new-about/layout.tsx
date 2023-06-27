// src/app/aboutの下のlayout.tsxが適応される

import { ReactNode } from "react";

export default function AboutLayout({
    children
}: {children: ReactNode}){
    return (
        <div className="flex justify-center items-center h-screen">{children}</div>
    )
}
