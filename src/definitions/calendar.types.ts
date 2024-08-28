export interface ICalendarEventBus {
    on_open_calendar: {}
    /**
     * @param {string} filter_id can be question_id or qnr_id(query_id)
     */
    delete_qnr_task_relation: { filter_id: string }
    on_mutate_task: true
    on_mutate_event: true
    selected_task_consultant_id?: string
}
