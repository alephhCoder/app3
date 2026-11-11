import type { ListProps, Tags } from "../types";
import { useState } from "react";
import { UniversalCom } from "../universalBtns";

export function Mainbar() {
     const [list, setList] = useState<ListProps[]>([])
     const [editId, setEditId] = useState<number | null>(null)
     

     function addList() {
        const newId = Date.now()
        setList([...list, {id: newId, title: "", check: false}])
        setEditId(newId)
        console.log("clicked")
     }
     console.log(list)
    return (
        <>
        <div className="w-[clamp(224px,72.9vw,700px)]">
        <UniversalCom clicked={() => addList()} text="Add New..." nclass="w-full p-6 border border-stroke" oclass="w-full mb-8"/>


        {list.map(item => (
            <div className="h-12 w-full centered border border-stroke rounded-lg mb-2" key={item.id}>
            {editId === item.id ? (
                    <div>
                        
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