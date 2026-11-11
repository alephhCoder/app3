import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type defaultProps = {
    icon?: ReactNode;
    text?: string;
    panel?: string;
    oclass?: string;
    nclass?: string;
    iconClass?: string;
    textClass?: string;

    clicked: () => void;
}

export function UniversalCom({icon, text, panel, oclass, nclass, iconClass, textClass, clicked}: defaultProps) {
    return (
        <div className={twMerge(` ${panel === "left" ? "flex h-fit w-full items-center justify-end mr-2" : "h-fit w-fit"} ${panel === "right" ? "flex h-fit w-full items-center justify-start ml-2" : "w-fit h-fit"}`, oclass)}>
            <div className={twMerge(`h-8 w-8 centered highlightTwo cursor-pointer bg-surface rounded-lg`, nclass)} onClick={clicked}>
                {icon !== undefined &&
                    <div className={twMerge(`centered h-6 w-6 [&>svg]:stroke-1 [&>svg]:text-gray`, iconClass)}>
                    {icon}
                    </div>}
                {text !== undefined &&
                    <div className={twMerge(`centered h-6 w-fit`, textClass)} >
                    {text}
                    </div>}
            </div>
        </div>
    )
}