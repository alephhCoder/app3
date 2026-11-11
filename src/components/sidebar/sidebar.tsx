import { PanelLeft } from "lucide-react";
import { UniversalCom } from "../universalBtns";

export function Sidebar({panel, setpanel}) {

    
    return (
        <UniversalCom clicked={() => setpanel(!panel)} panelset="left" panel={panel} panelMerge={true} icon={<PanelLeft />} text="AllApps!" oclass={`${panel && 'gap-20'}`} />
    )
}