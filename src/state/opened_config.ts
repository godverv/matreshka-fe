import {defineStore} from "pinia";

export const useOpenedConfigChangesStore = defineStore('openedConfig', {
    state: () => {
        return {
            changesMap: new Map<string, changeWithRollback>()
        }
    },
    getters: {
        envVariables: (state) => {
            const res: changes[] = []
             state
                .changesMap
                .forEach((v) =>
                    res.push({
                        fieldName: v.fieldName,
                        fieldValue: v.fieldValue
                    }))

            return res
        }
    },
    actions: {
        setValue(name: string, value: string, rollback: ()=>void) {
            this.changesMap.set(name, {
                fieldName: name,
                fieldValue: value,
                rollback: rollback
            })
        },
        deleteValue(name: string) {
            this.changesMap.delete(name)
        },
        rollbackAll() {
            this.changesMap.forEach((v) => {v.rollback()})
        }
    },
})

export type changes = {
    fieldName: string
    fieldValue: string
}

export type changeWithRollback = changes & {
    rollback: () => void
}
