import type { IAoAppDirectoryEventBus } from './definitions/ao-app-directory.types.js';
import type { IArtifactEventBus } from './definitions/artifact.types.js';
import type { IAsmaOverrides } from './definitions/asmaOvverides.js';
import type { ICalendarEventBus } from './definitions/calendar.types.js';
import type { IChatEventBus } from './definitions/chat.types.js';
import type { IConsentsEventBus } from './definitions/consents.types.js';
import type { ICrmEventBus } from './definitions/crm.types.js';
import type { IDirectoryEventBus } from './definitions/directory.types.js';
import type { ILegacyPortalEventBus } from './definitions/legacy-advoca.types.js';
import type { IMsOfficeEventBus } from './definitions/msoffice.types.js';
import type { INavigationEventBus } from './definitions/navigation.types.js';
import type { INotificationEventBus } from './definitions/notification.types.js';
import type { ITasksEventBus } from './definitions/tasks.types.js';
export * from './definitions/artifact.types.js';
export * from './definitions/chat.types.js';
export * from './definitions/directory.types.js';
export * from './event-buss.js';
export * from './interfaces/directory.interfaces.js';
export declare const chatEventBuss: {
    dispatch: <Key extends keyof IChatEventBus>(event: Key, arg: IChatEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IChatEventBus>(event: Key, callback: (val: IChatEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const artifactEventBuss: {
    dispatch: <Key extends keyof IArtifactEventBus>(event: Key, arg: IArtifactEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IArtifactEventBus>(event: Key, callback: (val: IArtifactEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const notificationEventBuss: {
    dispatch: <Key extends keyof INotificationEventBus>(event: Key, arg: INotificationEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof INotificationEventBus>(event: Key, callback: (val: INotificationEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const calendarEventBuss: {
    dispatch: <Key extends keyof ICalendarEventBus>(event: Key, arg: ICalendarEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof ICalendarEventBus>(event: Key, callback: (val: ICalendarEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const tasksEventBuss: {
    dispatch: <Key extends "on_open_tasks">(event: Key, arg: ITasksEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends "on_open_tasks">(event: Key, callback: (val: ITasksEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const directoryEventBuss: {
    dispatch: <Key extends keyof IDirectoryEventBus>(event: Key, arg: IDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IDirectoryEventBus>(event: Key, callback: (val: IDirectoryEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const oaDirectoryEventBuss: {
    dispatch: <Key extends keyof IAoAppDirectoryEventBus>(event: Key, arg: IAoAppDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IAoAppDirectoryEventBus>(event: Key, callback: (val: IAoAppDirectoryEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const consentsEventBuss: {
    dispatch: <Key extends keyof IConsentsEventBus>(event: Key, arg: IConsentsEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IConsentsEventBus>(event: Key, callback: (val: IConsentsEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const msOfficeEventBuss: {
    dispatch: <Key extends "login">(event: Key, arg: IMsOfficeEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends "login">(event: Key, callback: (val: IMsOfficeEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const asmaOverridesEventBus: {
    dispatch: <Key extends keyof IAsmaOverrides>(event: Key, arg: IAsmaOverrides[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IAsmaOverrides>(event: Key, callback: (val: IAsmaOverrides[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const navigationEventBus: {
    dispatch: <Key extends keyof INavigationEventBus>(event: Key, arg: INavigationEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof INavigationEventBus>(event: Key, callback: (val: INavigationEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const legacyPortalEventBus: {
    dispatch: <Key extends keyof ILegacyPortalEventBus>(event: Key, arg: ILegacyPortalEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof ILegacyPortalEventBus>(event: Key, callback: (val: ILegacyPortalEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
export declare const crmEventBus: {
    dispatch: <Key extends keyof ICrmEventBus>(event: Key, arg: ICrmEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof ICrmEventBus>(event: Key, callback: (val: ICrmEventBus[Key]) => void | Promise<void>) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map