// Stable DOM id for the empty slot the shell always renders next to the page title.
// A consuming app can portal its own rich content (e.g. a status badge) into this node —
// via `ReactDOM.createPortal`, using its own React root — to place UI in the shell's header
// without ever passing a rendered React element across the event bus. Elements created by
// one copy of React are rejected by another (React 19 throws on cross-copy elements), but a
// portal's children stay reconciled by the originating app's own React the whole time, so
// this works regardless of which React major each app pins.
export const PAGE_TITLE_EXTRA_SLOT_ID = 'shell-page-title-extra-slot';
//# sourceMappingURL=navigation.types.js.map