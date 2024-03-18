import { history } from 'asma-helpers';
export interface INavigationEventBus {
    on_navigation: {
        path: string;
    };
    on_trigger_prompt: {
        showPrompt: boolean;
        message: string;
        history?: typeof history;
        onConfirm?: () => void;
        onCancel?: () => void;
        onDelete?: () => void;
    };
    on_trigger_snackbar: {
        message: string;
        linkContent?: string;
        linkText?: string;
        hasButton?: boolean;
        hasCloseButton?: boolean;
    };
}
//# sourceMappingURL=navigation.types.d.ts.map