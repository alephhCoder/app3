import type { ListProps, Tags } from "../types";
import { useState } from "react";
import { UniversalCom, UniversalSel } from "../universalBtns";
import { StickyNoteCheck } from "lucide-react";
import { HexColorPicker } from "react-colorful";

 type MainbarProps = {
    createTag: (title: string, color: string) => number
 }
export function Mainbar({createTag}: MainbarProps) {
     const [list, setList] = useState<ListProps[]>([])
     const [editId, setEditId] = useState<number | null>(null)
     const [showOne, setShowOne] = useState(false)
     const [tagTitle, setTagTitle] = useState("")
     const [colorPop, setColorPop] = useState(false)
     const [tagColor, setTagColor] = useState("#fafafa")

     function addList() {
        const newId = Date.now()
        setList([...list, {id: newId, title: "", check: false}])
        setEditId(newId)
        console.log("clicked")
     }
     function newTag() {
        setShowOne(!showOne)
     }

     console.log(list)
    return (
        <>
        <div className="w-[clamp(224px,72.9vw,700px)]">
        <UniversalCom clicked={() => addList()} text="Add New..." nclass="w-full p-6 border border-stroke" oclass="w-full mb-8 ml-2 mr-0"/>


        {list.map(item => (
            <div className="h-14 w-full centered border border-stroke borderBottom rounded-lg mb-2" key={item.id}>
            {editId === item.id ? (
                    <div className="grid grid-rows-2 w-full h-full">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" disabled={true} className="w-4 h-4"/> <input placeholder="e.g work..." className="pb-0.5"/>
                            <UniversalCom icon={<StickyNoteCheck />} clicked={() => {setEditId(null), setShowOne(false), setColorPop(false), setTagColor("#fafafa")}} iconClass="w-4 h-4" nclass="w-5 h-5" oclass="ml-auto mr-2" />
                        </div>
                        <div>
                            <UniversalSel name="Tags" color="#808080" clicked={() => newTag()}/>
                                {showOne && (
                                    <div className="w-fit h-5 bg-default rounded border border-stroke cursor-pointer mt-1 flex flex-row items-center">
                                        <input placeholder="Tag title..." className="pb-1 pl-1 text-xs centered w-20 " value={tagTitle} onChange={(e) => setTagTitle(e.target.value)}/>
                                        <div className={`h-4 w-4 rounded border border-stroke mr-0.5 ml-1 `} style={{backgroundColor: tagColor}} onClick={() => setColorPop(!colorPop)}></div>
                                        <UniversalCom icon={<StickyNoteCheck />} clicked={() => {setShowOne(false), setColorPop(false), setTagColor("#fafafa")}} iconClass="w-4 h-4" nclass="w-4 h-4" oclass="ml-1 mr-0.5" />
                                    </div>
                                )}
                                {colorPop && (
                                    <HexColorPicker color={tagColor} onChange={setTagColor} style={{width: '120px', height: '120px', marginTop: '10px'}} />
                                )}
                        </div>
                    </div>
                ) : (
                    <div>
                
                    </div>
                )
            }
            </div>
        ))}
        </div>
        
        </>
    )
}