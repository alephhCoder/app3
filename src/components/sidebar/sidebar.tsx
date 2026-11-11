import { PanelLeft } from "lucide-react";
import { UniversalCom } from "../universalBtns";

export function Sidebar({panel, setpanel}) {

    console.log(panel)
    return (
        <UniversalCom clicked={() => setpanel(!panel)} panel={"left"} icon={<PanelLeft />} />
    )
}