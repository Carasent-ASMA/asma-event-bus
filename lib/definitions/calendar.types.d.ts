export interface ICalendarEventBus {
    on_open_calendar: {};
    /**
     * @param {string} filter_id can be question_id or qnr_id(query_id)
     */
    delete_qnr_task_relation: {
        filter_id: string;
    };
    on_create_task: true;
    on_create_event: true;
}
//# sourceMappingURL=calendar.types.d.ts.map