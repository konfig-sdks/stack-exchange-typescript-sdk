/* tslint:disable */
/* eslint-disable */
/*
StackExchange

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


The version of the OpenAPI document: 2.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { QuestionsInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Searches a site for any questions which fit the given criteria.   Search criteria are expressed using the following parameters:   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.  - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.  - answers - the minimum number of answers returned questions must have.  - body - text which must appear in returned questions\' bodies.  - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.  - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.  - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.  - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.  - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.  - title - text which must appear in returned questions\' titles.  - user - the id of the user who must own the questions returned.  - url - a url which must be contained in a post, may include a wildcard.  - views - the minimum number of views returned questions must have.  - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.      At least one additional parameter must be set if nottagged is set, for performance reasons.   The sorts accepted by this method operate on the follow fields of the question object:  - activity - last_activity_date  - creation - creation_date  - votes - score  - relevance - matches the relevance tab on the site itself Does not accept min or max   activity is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.     This method returns a list of questions. 
         * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \&quot;stackoverflow.com\&quot;), or a short form identified by api_site_parameter on the site object. 
         * @param {string} [tagged] String list (semicolon delimited).
         * @param {'desc' | 'asc'} [order] 
         * @param {string} [max] sort &#x3D; activity &#x3D;&gt; date sort &#x3D; creation &#x3D;&gt; date sort &#x3D; votes &#x3D;&gt; number sort &#x3D; relevance &#x3D;&gt; none 
         * @param {string} [min] sort &#x3D; activity &#x3D;&gt; date sort &#x3D; creation &#x3D;&gt; date sort &#x3D; votes &#x3D;&gt; number sort &#x3D; relevance &#x3D;&gt; none 
         * @param {'activity' | 'creation' | 'votes' | 'relevance'} [sort] 
         * @param {number} [fromdate] Unix date.
         * @param {number} [todate] Unix date.
         * @param {number} [pagesize] 
         * @param {number} [page] 
         * @param {string} [filter] #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\&#39;s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \&quot;bake in\&quot; any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \&quot;safe\&quot; filter is mearly an \&quot;unsafe\&quot; one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \&quot;safe\&quot; data is the only accessible data it will be returned even in \&quot;unsafe\&quot; filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
         * @param {string} [callback] All API responses are JSON, we do support JSONP with the callback query parameter. 
         * @param {'true' | 'false'} [accepted] 
         * @param {number} [answers] 
         * @param {string} [body] 
         * @param {'true' | 'false'} [closed] 
         * @param {'true' | 'false'} [migrated] 
         * @param {'true' | 'false'} [notice] 
         * @param {string} [nottagged] String list (semicolon delimited).
         * @param {string} [q] 
         * @param {string} [title] 
         * @param {string} [url] 
         * @param {number} [user] 
         * @param {number} [views] 
         * @param {'true' | 'false'} [wiki] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        siteQuestionsAdvancedSearch: async (site: string, tagged?: string, order?: 'desc' | 'asc', max?: string, min?: string, sort?: 'activity' | 'creation' | 'votes' | 'relevance', fromdate?: number, todate?: number, pagesize?: number, page?: number, filter?: string, callback?: string, accepted?: 'true' | 'false', answers?: number, body?: string, closed?: 'true' | 'false', migrated?: 'true' | 'false', notice?: 'true' | 'false', nottagged?: string, q?: string, title?: string, url?: string, user?: number, views?: number, wiki?: 'true' | 'false', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'site' is not null or undefined
            assertParamExists('siteQuestionsAdvancedSearch', 'site', site)
            const localVarPath = `/search/advanced`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (tagged !== undefined) {
                localVarQueryParameter['tagged'] = tagged;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (max !== undefined) {
                localVarQueryParameter['max'] = max;
            }

            if (min !== undefined) {
                localVarQueryParameter['min'] = min;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (fromdate !== undefined) {
                localVarQueryParameter['fromdate'] = fromdate;
            }

            if (todate !== undefined) {
                localVarQueryParameter['todate'] = todate;
            }

            if (pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (callback !== undefined) {
                localVarQueryParameter['callback'] = callback;
            }

            if (site !== undefined) {
                localVarQueryParameter['site'] = site;
            }

            if (accepted !== undefined) {
                localVarQueryParameter['accepted'] = accepted;
            }

            if (answers !== undefined) {
                localVarQueryParameter['answers'] = answers;
            }

            if (body !== undefined) {
                localVarQueryParameter['body'] = body;
            }

            if (closed !== undefined) {
                localVarQueryParameter['closed'] = closed;
            }

            if (migrated !== undefined) {
                localVarQueryParameter['migrated'] = migrated;
            }

            if (notice !== undefined) {
                localVarQueryParameter['notice'] = notice;
            }

            if (nottagged !== undefined) {
                localVarQueryParameter['nottagged'] = nottagged;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (url !== undefined) {
                localVarQueryParameter['url'] = url;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (views !== undefined) {
                localVarQueryParameter['views'] = views;
            }

            if (wiki !== undefined) {
                localVarQueryParameter['wiki'] = wiki;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/search/advanced',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
        /**
         * Searches a site for any questions which fit the given criteria.   Search criteria are expressed using the following parameters:   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.  - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.  - answers - the minimum number of answers returned questions must have.  - body - text which must appear in returned questions\' bodies.  - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.  - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.  - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.  - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.  - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.  - title - text which must appear in returned questions\' titles.  - user - the id of the user who must own the questions returned.  - url - a url which must be contained in a post, may include a wildcard.  - views - the minimum number of views returned questions must have.  - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.      At least one additional parameter must be set if nottagged is set, for performance reasons.   The sorts accepted by this method operate on the follow fields of the question object:  - activity - last_activity_date  - creation - creation_date  - votes - score  - relevance - matches the relevance tab on the site itself Does not accept min or max   activity is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.     This method returns a list of questions. 
         * @param {SearchApiSiteQuestionsAdvancedSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async siteQuestionsAdvancedSearch(requestParameters: SearchApiSiteQuestionsAdvancedSearchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QuestionsInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.siteQuestionsAdvancedSearch(requestParameters.site, requestParameters.tagged, requestParameters.order, requestParameters.max, requestParameters.min, requestParameters.sort, requestParameters.fromdate, requestParameters.todate, requestParameters.pagesize, requestParameters.page, requestParameters.filter, requestParameters.callback, requestParameters.accepted, requestParameters.answers, requestParameters.body, requestParameters.closed, requestParameters.migrated, requestParameters.notice, requestParameters.nottagged, requestParameters.q, requestParameters.title, requestParameters.url, requestParameters.user, requestParameters.views, requestParameters.wiki, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchApiFp(configuration)
    return {
        /**
         * Searches a site for any questions which fit the given criteria.   Search criteria are expressed using the following parameters:   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.  - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.  - answers - the minimum number of answers returned questions must have.  - body - text which must appear in returned questions\' bodies.  - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.  - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.  - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.  - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.  - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.  - title - text which must appear in returned questions\' titles.  - user - the id of the user who must own the questions returned.  - url - a url which must be contained in a post, may include a wildcard.  - views - the minimum number of views returned questions must have.  - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.      At least one additional parameter must be set if nottagged is set, for performance reasons.   The sorts accepted by this method operate on the follow fields of the question object:  - activity - last_activity_date  - creation - creation_date  - votes - score  - relevance - matches the relevance tab on the site itself Does not accept min or max   activity is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.     This method returns a list of questions. 
         * @param {SearchApiSiteQuestionsAdvancedSearchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        siteQuestionsAdvancedSearch(requestParameters: SearchApiSiteQuestionsAdvancedSearchRequest, options?: AxiosRequestConfig): AxiosPromise<Array<QuestionsInner>> {
            return localVarFp.siteQuestionsAdvancedSearch(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for siteQuestionsAdvancedSearch operation in SearchApi.
 * @export
 * @interface SearchApiSiteQuestionsAdvancedSearchRequest
 */
export type SearchApiSiteQuestionsAdvancedSearchRequest = {
    
    /**
    * Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly site: string
    
    /**
    * String list (semicolon delimited).
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly tagged?: string
    
    /**
    * 
    * @type {'desc' | 'asc'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly order?: 'desc' | 'asc'
    
    /**
    * sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly max?: string
    
    /**
    * sort = activity => date sort = creation => date sort = votes => number sort = relevance => none 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly min?: string
    
    /**
    * 
    * @type {'activity' | 'creation' | 'votes' | 'relevance'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly sort?: 'activity' | 'creation' | 'votes' | 'relevance'
    
    /**
    * Unix date.
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly fromdate?: number
    
    /**
    * Unix date.
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly todate?: number
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly pagesize?: number
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly page?: number
    
    /**
    * #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly filter?: string
    
    /**
    * All API responses are JSON, we do support JSONP with the callback query parameter. 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly callback?: string
    
    /**
    * 
    * @type {'true' | 'false'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly accepted?: 'true' | 'false'
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly answers?: number
    
    /**
    * 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly body?: string
    
    /**
    * 
    * @type {'true' | 'false'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly closed?: 'true' | 'false'
    
    /**
    * 
    * @type {'true' | 'false'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly migrated?: 'true' | 'false'
    
    /**
    * 
    * @type {'true' | 'false'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly notice?: 'true' | 'false'
    
    /**
    * String list (semicolon delimited).
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly nottagged?: string
    
    /**
    * 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly q?: string
    
    /**
    * 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly title?: string
    
    /**
    * 
    * @type {string}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly url?: string
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly user?: number
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly views?: number
    
    /**
    * 
    * @type {'true' | 'false'}
    * @memberof SearchApiSiteQuestionsAdvancedSearch
    */
    readonly wiki?: 'true' | 'false'
    
}

/**
 * SearchApiGenerated - object-oriented interface
 * @export
 * @class SearchApiGenerated
 * @extends {BaseAPI}
 */
export class SearchApiGenerated extends BaseAPI {
    /**
     * Searches a site for any questions which fit the given criteria.   Search criteria are expressed using the following parameters:   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.  - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.  - answers - the minimum number of answers returned questions must have.  - body - text which must appear in returned questions\' bodies.  - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.  - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.  - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.  - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.  - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.  - title - text which must appear in returned questions\' titles.  - user - the id of the user who must own the questions returned.  - url - a url which must be contained in a post, may include a wildcard.  - views - the minimum number of views returned questions must have.  - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.      At least one additional parameter must be set if nottagged is set, for performance reasons.   The sorts accepted by this method operate on the follow fields of the question object:  - activity - last_activity_date  - creation - creation_date  - votes - score  - relevance - matches the relevance tab on the site itself Does not accept min or max   activity is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.     This method returns a list of questions. 
     * @param {SearchApiSiteQuestionsAdvancedSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApiGenerated
     */
    public siteQuestionsAdvancedSearch(requestParameters: SearchApiSiteQuestionsAdvancedSearchRequest, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).siteQuestionsAdvancedSearch(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
