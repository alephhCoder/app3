import { ChevronDown, ChevronUpIcon } from "lucide-react";
import { useState, type ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type defaultProps = {
    icon?: ReactNode;
    text?: string;
    panel?: string;
    panelset?: string;
    panelMerge?: boolean;
    oclass?: string;
    nclass?: string;
    iconClass?: string;
    textClass?: string;

    clicked: () => void;
}
type Option = { id:number, label:string, color:string }

type selectProps = {
    oclass?: string
    name: string
    color: string
    options: Option[]
    
    onSelect: (option: Option) => void
    clicked?: () => void
}

export function UniversalCom({icon, text, panel, panelset, panelMerge, oclass, nclass, iconClass, textClass, clicked}: defaultProps) {
    console.log(panel, panelset)
    return (
        <div className={twMerge(`flex items-center ${panelset === "left" && `${panel ? "justify-end h-fit w-full" : "selfcentered h-fit w-fit"}`} ${panelset === "right" && `${panel ? "h-fit w-full items-center justify-start" : "w-fit h-fit"}`} `, oclass)}>
            {text !== undefined && (
                    panelMerge === true && (
                        panel ? (
                            <div className={twMerge(`centered h-6 w-fit`, textClass)} >{text}</div>
                        ) : (
                            <div></div>
                        )
                    )
                )}
            <div className={twMerge(`h-8 w-8 centered highlightTwo cursor-pointer bg-surface rounded-lg ${panel && 'mr-2'}`, nclass)} onClick={clicked}>
                
                {icon !== undefined &&
                    <div className={twMerge(`centered h-6 w-6 [&>svg]:stroke-1 [&>svg]:text-gray`, iconClass)}>
                    {icon}
                    </div>}
                {text !== undefined && (
                    panelMerge === false && <div className={twMerge(`centered h-6 w-fit`, textClass)} >{text}</div>
                )}
            </div>
        </div>
    )
}
export function UniversalSel({oclass, name, color, options, onSelect, clicked}: selectProps) {
    const [openSel, setOpen] = useState(false)
    
    return (
    <>
        <div className={twMerge(`w-fit h-5 bg-default rounded border border-stroke cursor-pointer grid grid-cols-[1fr_1rem]`, oclass)}>
            <div className="centered">
            <span className="text-xs mb-0.5 w-fit ml-1 mr-1">{name}</span> <div className={`h-4 w-4 rounded border border-stroke mr-0.5 `} style={{backgroundColor: color}}></div>
            </div>
            <div className="border borderLeft border-stroke centered">
                {openSel ? <UniversalCom icon={<ChevronUpIcon />} iconClass="w-4 h-4" nclass="bg-default h-4 w-4" clicked={() => {setOpen(false)}} /> : <UniversalCom icon={<ChevronDown />} iconClass="w-4 h-4" nclass="bg-default h-4 w-4" clicked={() => setOpen(true)} />}
            </div>
        </div>
        {openSel && (
            <div className="w-23 h-fit bg-default rounded border border-stroke cursor-pointer mt-1">
                {options.map(option => (
                    <div key={option.id} className="w-full h-5 border border-stroke borderTop flex items-center cursor-pointer" onClick={() => onSelect(option)}>
                        <span className="text-xs ml-1 ">{option.label}</span> <div className={`h-4 w-4 rounded border border-stroke ml-auto mr-1 `} style={{backgroundColor: option.color}}></div>
                    </div>
                ))}

                <div className="w-full h-5 border border-stroke borderTop flex centered cursor-pointer" onClick={clicked}>
                    <span className="text-xs">Create New</span>
                </div>
            </div>
        )}
    </>
    )
}

                  