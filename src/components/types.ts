export type ListProps = {
        id: number
        check: boolean
        title: string
        dueDate?: string
        tagId?: string[]
     }
export type Tags = {
        id: number
        title: string
        color: string
     }