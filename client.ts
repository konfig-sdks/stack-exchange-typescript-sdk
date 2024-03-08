/*
StackExchange

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


The version of the OpenAPI document: 2.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AccessTokenApi,
  AnswerApi,
  AssociatedApi,
  BadgeApi,
  CommentApi,
  EditApi,
  ErrorApi,
  EventApi,
  FavoriteApi,
  FilterApi,
  InformationApi,
  MentionApi,
  MergeApi,
  MessageApi,
  NotificationApi,
  PermissionApi,
  PostApi,
  PrivilegeApi,
  QueryApi,
  QuestionApi,
  ReputationApi,
  RevisionApi,
  SearchApi,
  SiteApi,
  TagApi,
  TimelineApi,
  UserApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { StackExchangeCustom } from "./client-custom";

export class StackExchange extends StackExchangeCustom {
  readonly accessToken: AccessTokenApi;
  readonly answer: AnswerApi;
  readonly associated: AssociatedApi;
  readonly badge: BadgeApi;
  readonly comment: CommentApi;
  readonly edit: EditApi;
  readonly error: ErrorApi;
  readonly event: EventApi;
  readonly favorite: FavoriteApi;
  readonly filter: FilterApi;
  readonly information: InformationApi;
  readonly mention: MentionApi;
  readonly merge: MergeApi;
  readonly message: MessageApi;
  readonly notification: NotificationApi;
  readonly permission: PermissionApi;
  readonly post: PostApi;
  readonly privilege: PrivilegeApi;
  readonly query: QueryApi;
  readonly question: QuestionApi;
  readonly reputation: ReputationApi;
  readonly revision: RevisionApi;
  readonly search: SearchApi;
  readonly site: SiteApi;
  readonly tag: TagApi;
  readonly timeline: TimelineApi;
  readonly user: UserApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.accessToken = new AccessTokenApi(configuration);
    this.answer = new AnswerApi(configuration);
    this.associated = new AssociatedApi(configuration);
    this.badge = new BadgeApi(configuration);
    this.comment = new CommentApi(configuration);
    this.edit = new EditApi(configuration);
    this.error = new ErrorApi(configuration);
    this.event = new EventApi(configuration);
    this.favorite = new FavoriteApi(configuration);
    this.filter = new FilterApi(configuration);
    this.information = new InformationApi(configuration);
    this.mention = new MentionApi(configuration);
    this.merge = new MergeApi(configuration);
    this.message = new MessageApi(configuration);
    this.notification = new NotificationApi(configuration);
    this.permission = new PermissionApi(configuration);
    this.post = new PostApi(configuration);
    this.privilege = new PrivilegeApi(configuration);
    this.query = new QueryApi(configuration);
    this.question = new QuestionApi(configuration);
    this.reputation = new ReputationApi(configuration);
    this.revision = new RevisionApi(configuration);
    this.search = new SearchApi(configuration);
    this.site = new SiteApi(configuration);
    this.tag = new TagApi(configuration);
    this.timeline = new TimelineApi(configuration);
    this.user = new UserApi(configuration);
  }

}