export type HookName = { hookName: string }

export type Action<T = null> = {
    type: string,
    payload?: T
}
