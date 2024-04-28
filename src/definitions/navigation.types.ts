import type { History } from 'history'

export interface INavigationEventBus {
    on_navigation: {
        path: string
    }
    on_trigger_prompt: {
        showPrompt: boolean
        message: string
        history?: History
        onConfirm?: () => void
        onCancel?: () => void
        onDelete?: () => void
    }
    on_trigger_snackbar: {
        message: string
        linkContent?: string
        linkText?: string
        hasButton?: boolean
        hasCloseButton?: boolean
    }
}
