import type { IAoAppDirectoryEventBus } from './definitions/ao-app-directory.types.js'
import type { IArtifactEventBus } from './definitions/artifact.types.js'
import type { IAsmaOverrides } from './definitions/asmaOvverides.js'
import type { ICalendarEventBus } from './definitions/calendar.types.js'
import type { IChatEventBus } from './definitions/chat.types.js'
import type { IConsentsEventBus } from './definitions/consents.types.js'
import type { ICrmEventBus } from './definitions/crm.types.js'
import type { IDirectoryEventBus } from './definitions/directory.types.js'
import type { ILegacyPortalEventBus } from './definitions/legacy-advoca.types.js'
import type { IMsOfficeEventBus } from './definitions/msoffice.types.js'
import type { INavigationEventBus } from './definitions/navigation.types.js'
import type { INotificationEventBus } from './definitions/notification.types.js'
import type { ITasksEventBus } from './definitions/tasks.types.js'
import { EventBus } from './event-buss.js'

export * from './definitions/artifact.types.js'
export * from './definitions/chat.types.js'
export * from './definitions/directory.types.js'
export * from './event-buss.js'
export * from './interfaces/directory.interfaces.js'

export const chatEventBuss = EventBus<IChatEventBus>('app-chat')

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')
export const notificationEventBuss = EventBus<INotificationEventBus>('app-notification')

export const calendarEventBuss = EventBus<ICalendarEventBus>('app-calendar')
export const tasksEventBuss = EventBus<ITasksEventBus>('app-tasks')

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')
export const oaDirectoryEventBuss = EventBus<IAoAppDirectoryEventBus>('ao-app-directory')
export const consentsEventBuss = EventBus<IConsentsEventBus>('app-consents')
export const msOfficeEventBuss = EventBus<IMsOfficeEventBus>('app-office')
export const asmaOverridesEventBus = EventBus<IAsmaOverrides>('asma-overrides')
export const navigationEventBus = EventBus<INavigationEventBus>('app-navigation')
export const legacyPortalEventBus = EventBus<ILegacyPortalEventBus>('legacy-portal')

export const crmEventBus = EventBus<ICrmEventBus>('app-crm')
