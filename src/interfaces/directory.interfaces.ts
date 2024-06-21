export interface IPatientBasicData {
    /**
     * @id is user directory_uuid or users directory_id
     */
    id: string
    activity_id: string
    name: string
}
export interface IUsersForOrders extends IPatientBasicData {
    directory_uuid: string
}

export interface IUserConsultants extends Pick<IUsersForOrders, 'id' | 'name' | 'directory_uuid'> {
}

export interface IPatientFullData extends IPatientBasicData {
    actno: string
    activity_ids: string[]
}

