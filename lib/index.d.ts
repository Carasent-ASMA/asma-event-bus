import type { IAoAppDirectoryEventBus } from './definitions/ao-app-directory.types';
import type { IArtifactEventBus } from './definitions/artifact.types';
import { IAsmaOverrides } from './definitions/asmaOvverides';
import type { ICalendarEventBus } from './definitions/calendar.types';
import type { IChatEventBus } from './definitions/chat.types';
import type { IConsentsEventBus } from './definitions/consents.types';
import type { IDirectoryEventBus } from './definitions/directory.types';
import type { IMsOfficeEventBus } from './definitions/msoffice.types';
import type { INotificationEventBus } from './definitions/notification.types';
import type { ITasksEventBus } from './definitions/tasks.types';
import type { INavigationEventBus } from './definitions/navigation.types';
import { ILegacyPortalEventBus } from './definitions/legacy-advoca.types';
import { ICrmEventBus } from './definitions/crm.types';
export * from './definitions/artifact.types';
export * from './definitions/directory.types';
export declare const chatEventBuss: {
    dispatch: <Key extends keyof IChatEventBus>(event: Key, arg: IChatEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IChatEventBus>(event: Key, callback: (val: IChatEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const artifactEventBuss: {
    dispatch: <Key extends keyof IArtifactEventBus>(event: Key, arg: IArtifactEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IArtifactEventBus>(event: Key, callback: (val: IArtifactEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const notificationEventBuss: {
    dispatch: <Key extends keyof INotificationEventBus>(event: Key, arg: INotificationEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof INotificationEventBus>(event: Key, callback: (val: INotificationEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const calendarEventBuss: {
    dispatch: <Key extends keyof ICalendarEventBus>(event: Key, arg: ICalendarEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof ICalendarEventBus>(event: Key, callback: (val: ICalendarEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const tasksEventBuss: {
    dispatch: <Key extends "on_open_tasks">(event: Key, arg: ITasksEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends "on_open_tasks">(event: Key, callback: (val: ITasksEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const directoryEventBuss: {
    dispatch: <Key extends keyof IDirectoryEventBus>(event: Key, arg: IDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IDirectoryEventBus>(event: Key, callback: (val: IDirectoryEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const oaDirectoryEventBuss: {
    dispatch: <Key extends keyof IAoAppDirectoryEventBus>(event: Key, arg: IAoAppDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IAoAppDirectoryEventBus>(event: Key, callback: (val: IAoAppDirectoryEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const consentsEventBuss: {
    dispatch: <Key extends keyof IConsentsEventBus>(event: Key, arg: IConsentsEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IConsentsEventBus>(event: Key, callback: (val: IConsentsEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const msOfficeEventBuss: {
    dispatch: <Key extends "login">(event: Key, arg: IMsOfficeEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends "login">(event: Key, callback: (val: IMsOfficeEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const asmaOverridesEventBus: {
    dispatch: <Key extends keyof IAsmaOverrides>(event: Key, arg: IAsmaOverrides[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof IAsmaOverrides>(event: Key, callback: (val: IAsmaOverrides[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const navigationEventBus: {
    dispatch: <Key extends keyof INavigationEventBus>(event: Key, arg: INavigationEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof INavigationEventBus>(event: Key, callback: (val: INavigationEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const legacyPortalEventBus: {
    dispatch: <Key extends keyof ILegacyPortalEventBus>(event: Key, arg: ILegacyPortalEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends keyof ILegacyPortalEventBus>(event: Key, callback: (val: ILegacyPortalEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
export declare const crmEventBus: {
    dispatch: <Key extends "time_tracking_dialog">(event: Key, arg: ICrmEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key extends "time_tracking_dialog">(event: Key, callback: (val: ICrmEventBus[Key]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map