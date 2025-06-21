import type { IPatientFullData } from '../interfaces/directory.interfaces.js'

export interface IAoAppDirectoryEventBus {
    selected_users: IPatientFullData[]
    insert_time_tracking_entry: () => void
    check_for_changes: true
    new_event: true
    new_task: true
    new_note: true
}
