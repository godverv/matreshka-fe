import {defineStore} from "pinia";

export const useActiveConfigStore = defineStore('openedConfig', {
    state: () => {
        return {
            changesMap: new Map<string, changeWithRollback>(),
            parIsChangedMap: new Map<string, boolean>()
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
        },
        length: (state) => {
            return state.changesMap.size
        },
    },
    actions: {
        setValue(name: string, value: string, rollback: () => void) {
            this.changesMap.set(name, {
                fieldName: name,
                fieldValue: value,
                rollback: rollback
            })
        },
        deleteValue(name: string): void {
            this.changesMap.delete(name)
        },
        rollbackAll(): void {
            this.changesMap.forEach((v) => {
                v.rollback()
                this.changesMap.delete(v.fieldName)
            })
        },
    },
})

export type changes = {
    fieldName: string
    fieldValue: string
}

export type changeWithRollback = changes & {
    rollback: () => void
}
