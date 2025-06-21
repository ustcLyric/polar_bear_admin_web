import {defineStore} from "pinia";

// 定义tag数据存储标准
export interface TagState {
    tags: Tag[],
}

export interface Tag {
    name: string,
    path: string,
}

export const useTagStore = defineStore('tagStore', {
    state: (): TagState => {
        return {
            tags: [],
        }
    },
    actions: {
        // 1.添加tag
        addTag(tag: Tag) {
            const index = this.tags.findIndex(item => tag.path === item.path)
            if (index === -1) {
                this.tags.push(tag)
            }
        },
        // 2.移除tag
        removeTag(tag: Tag) {
            const index = this.tags.findIndex(item => tag.path === item.path)
            if (index !== -1) {
                this.tags.splice(index, 1)
            }
        }
    }
})