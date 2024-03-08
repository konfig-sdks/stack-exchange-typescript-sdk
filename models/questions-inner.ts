/*
StackExchange

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


The version of the OpenAPI document: 2.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnswersInnerLastEditor } from './answers-inner-last-editor';
import { QuestionsInnerClosedDetails } from './questions-inner-closed-details';
import { QuestionsInnerMigratedFrom } from './questions-inner-migrated-from';
import { QuestionsInnerNotice } from './questions-inner-notice';

/**
 * 
 * @export
 * @interface QuestionsInner
 */
export interface QuestionsInner {
    /**
     * 
     * @type {Array<any>}
     * @memberof QuestionsInner
     */
    'tags'?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'title'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'accepted_answer_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'answer_count'?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof QuestionsInner
     */
    'answers'?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'body'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'body_markdown'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'bounty_amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'bounty_closes_date'?: number;
    /**
     * 
     * @type {AnswersInnerLastEditor}
     * @memberof QuestionsInner
     */
    'bounty_user'?: AnswersInnerLastEditor;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'can_close'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'can_flag'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'close_vote_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'closed_date'?: number;
    /**
     * 
     * @type {QuestionsInnerClosedDetails}
     * @memberof QuestionsInner
     */
    'closed_details'?: QuestionsInnerClosedDetails;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'closed_reason'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'comment_count'?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof QuestionsInner
     */
    'comments'?: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'community_owned_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'creation_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'delete_vote_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'down_vote_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'downvoted'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'favorite_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'favorited'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'is_answered'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'last_activity_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'last_edit_date'?: number;
    /**
     * 
     * @type {AnswersInnerLastEditor}
     * @memberof QuestionsInner
     */
    'last_editor'?: AnswersInnerLastEditor;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'link'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'locked_date'?: number;
    /**
     * 
     * @type {QuestionsInnerMigratedFrom}
     * @memberof QuestionsInner
     */
    'migrated_from'?: QuestionsInnerMigratedFrom;
    /**
     * 
     * @type {QuestionsInnerMigratedFrom}
     * @memberof QuestionsInner
     */
    'migrated_to'?: QuestionsInnerMigratedFrom;
    /**
     * 
     * @type {QuestionsInnerNotice}
     * @memberof QuestionsInner
     */
    'notice'?: QuestionsInnerNotice;
    /**
     * 
     * @type {AnswersInnerLastEditor}
     * @memberof QuestionsInner
     */
    'owner'?: AnswersInnerLastEditor;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'protected_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'question_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'reopen_vote_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'score'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuestionsInner
     */
    'share_link'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'up_vote_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof QuestionsInner
     */
    'upvoted'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof QuestionsInner
     */
    'view_count'?: number;
}
