/*
StackExchange

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


The version of the OpenAPI document: 2.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnswersInnerLastEditorBadgeCounts } from './answers-inner-last-editor-badge-counts';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'about_me'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'accept_rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'account_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'age'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'answer_count'?: number;
    /**
     * 
     * @type {AnswersInnerLastEditorBadgeCounts}
     * @memberof User
     */
    'badge_counts'?: AnswersInnerLastEditorBadgeCounts;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'creation_date'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'display_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'down_vote_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'is_employee'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'last_access_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'last_modified_date'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'link'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'profile_image'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'question_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation_change_day'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation_change_month'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation_change_quarter'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation_change_week'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'reputation_change_year'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'timed_penalty_date'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'up_vote_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'user_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'user_type'?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'view_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'website_url'?: string;
}
