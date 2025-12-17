import type { ArtifactPresenterTypes } from "asma-types";

export interface IOnSelectDocument {
  id: string;
  name: string;
  url?: string;
  file?: File;
  extension?: string;
}

export interface IArtifactOnSelect {
  id: string;
  type: "qnr" | "doc" | "parcel";
}

export type IEventUser = {
  id: string;
  activity_id: string;
  name: string;
  actno?: string;
  national_id?: string;
};

export type AttachEventQnrsParam = {
  event_id: string;
  start_date: Date;
  end_date: Date;
  sharing_name: string;
  attendees: IEventUser[];
  organizers: IEventUser[];
  attendee_template_uuids: string[];
  organizer_template_uuids: string[];
};

export interface IArtifactEventBus {
  on_sync_events: AttachEventQnrsParam[];
  on_select_documents: IOnSelectDocument[];
  moderator_artifact_basic_data: IModeratorArtifactBasicData[];
  on_open_plans: {};
  on_open_research: {};
  qnr_custom_context?: string;
  sms_notification_recipients: ISmsNotificationRecipient[];
  /**
   * @use in all-qnrs widget
   */
  on_send_artifacts_to_cart: IArtifactOnSelect[];
  /**
   * @use in orders, all-qnrs widgets
   */
  select_artifacts: IArtifactOnSelect[];

  navigate_to_qnr_template_editor: {
    qnr_id?: string;
    is_anonymous?: boolean;
  };
  template_id: number;
  sms_keyword_replacements: { key: string; value: string }[];
  /**
   * @param template_ids_responsible - ids of templates to create questionnaire for the responsible (adopus side)
   * @param template_ids_participant - ids of templates to create questionnaire for the responsible (advoca side)
   * @example { template_ids_responsible: ['1', '2'], template_ids_participant: ['1', '2'], callBack: (responsible_qnr_ids, participant_qnr_ids) => void }
   * @summary Create questionnaire from templates and return ids of created questionnaires
   */
  create_questionnaire: {
    template_ids_responsible: string[];
    template_ids_participant: string[];
    callBack: (
      responsible_qnr_ids: string[],
      participant_qnr_ids: string[]
    ) => void;
  };
  on_select_post_journal_documents: {
    file: File;
    data: {
      title: string;
      extension: string;
      forSign?: boolean;
      docId?: string;
    };
  }[];
  on_mutate_help_link: true;
}

export interface IModeratorArtifactBasicData {
  type: ArtifactPresenterTypes;
  id: string;
  patient_id: string;
}

export interface ISmsNotificationRecipient {
  service?: string;
  user_id: string;
  subject_id: string;
  sendSms?: boolean;
  template_id?: string;
}
