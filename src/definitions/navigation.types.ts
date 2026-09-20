import type { History } from 'history'

/**
 * ASMA-8225 (TB-17) — bottom-surface suppression contract.
 *
 * The kind of surface occupying the bottom edge of a compact viewport. Any
 * occupancy suppresses the shell's bottom TabBar. This union is closed; the
 * chat composer is deliberately NOT a suppressing surface (the TabBar stays
 * visible in Chat and the composer coexists with it).
 */
export type BottomSurfaceKind =
    /** The soft keyboard raised by a focused editable element. */
    | 'keyboard'
    /** A modal dialog/backdrop overlay that owns the whole viewport, bottom edge included. */
    | 'modal_overlay'
    /** A bottom-anchored action footer of a modal task (e.g. the document sign/reject footer). */
    | 'task_footer'
    /** Full-screen media (video, image/document viewer) that owns the bottom edge. */
    | 'fullscreen_media'

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

    app_shell_mobile_menu: {
        isOpen: boolean
    }
    on_set_page_title: string

    /**
     * A surface started occupying the bottom edge (ASMA-8225 / TB-17).
     *
     * MUST be dispatched with `shouldPersist = false`: the bus replays the last
     * persisted payload to every late subscriber, and a replayed stale acquire
     * would corrupt the shell's occupancy ledger (a phantom surface would keep
     * the TabBar suppressed forever). The event bus is transport, not the
     * ledger — the shell's MST occupancy map is the single source of truth.
     *
     * `surfaceInstanceId` is stable per mounted surface instance and is reused
     * verbatim in the matching `bottom_surface_release`. Reserved ids use the
     * `system:` prefix (e.g. `system:keyboard`) and survive route changes;
     * everything else is treated as route-scoped by the shell.
     */
    bottom_surface_acquire: {
        surfaceInstanceId: string
        kind: BottomSurfaceKind
    }
    /**
     * The surface with `surfaceInstanceId` stopped occupying the bottom edge.
     * MUST be dispatched with `shouldPersist = false` (see `bottom_surface_acquire`).
     * Releasing an id that was never acquired is harmless (idempotent ledger).
     */
    bottom_surface_release: {
        surfaceInstanceId: string
    }
}

export const PAGE_TITLE_EXTRA_SLOT_ID = 'shell-page-title-extra-slot'
