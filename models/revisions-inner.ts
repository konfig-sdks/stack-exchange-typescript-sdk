/*
StackExchange

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


The version of the OpenAPI document: 2.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnswersInnerLastEditor } from './answers-inner-last-editor';

/**
 * 
 * @export
 * @interface RevisionsInner
 */
export interface RevisionsInner {
    /**
     * 
     * @type {Array<any>}
     * @memberof RevisionsInner
     */
    'tags'?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'body'?: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'comment'?: string;
    /**
     * 
     * @type {number}
     * @memberof RevisionsInner
     */
    'creation_date'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RevisionsInner
     */
    'is_rollback'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'last_body'?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof RevisionsInner
     */
    'last_tags'?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'last_title'?: string;
    /**
     * 
     * @type {number}
     * @memberof RevisionsInner
     */
    'post_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'post_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'revision_guid'?: string;
    /**
     * 
     * @type {number}
     * @memberof RevisionsInner
     */
    'revision_number'?: number;
    /**
     * 
     * @type {string}
     * @memberof RevisionsInner
     */
    'revision_type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RevisionsInner
     */
    'set_community_wiki'?: boolean;
    /**
     * 
     * @type {AnswersInnerLastEditor}
     * @memberof RevisionsInner
     */
    'user'?: AnswersInnerLastEditor;
}

