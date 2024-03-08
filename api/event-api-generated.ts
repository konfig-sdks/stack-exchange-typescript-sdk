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
import { EventsInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a stream of events that have occurred on the site.   The API considers the following \"events\":  - posting a question  - posting an answer  - posting a comment  - editing a post  - creating a user          Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.   It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.   This method returns a list of events. 
         * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \&quot;stackoverflow.com\&quot;), or a short form identified by api_site_parameter on the site object. 
         * @param {number} [pagesize] 
         * @param {number} [page] 
         * @param {string} [filter] #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\&#39;s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \&quot;bake in\&quot; any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \&quot;safe\&quot; filter is mearly an \&quot;unsafe\&quot; one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \&quot;safe\&quot; data is the only accessible data it will be returned even in \&quot;unsafe\&quot; filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
         * @param {string} [callback] All API responses are JSON, we do support JSONP with the callback query parameter. 
         * @param {number} [since] Unix date.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents: async (site: string, pagesize?: number, page?: number, filter?: string, callback?: string, since?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'site' is not null or undefined
            assertParamExists('listEvents', 'site', site)
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

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

            if (since !== undefined) {
                localVarQueryParameter['since'] = since;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/events',
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
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a stream of events that have occurred on the site.   The API considers the following \"events\":  - posting a question  - posting an answer  - posting a comment  - editing a post  - creating a user          Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.   It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.   This method returns a list of events. 
         * @param {EventApiListEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEvents(requestParameters: EventApiListEventsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventsInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEvents(requestParameters.site, requestParameters.pagesize, requestParameters.page, requestParameters.filter, requestParameters.callback, requestParameters.since, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * Returns a stream of events that have occurred on the site.   The API considers the following \"events\":  - posting a question  - posting an answer  - posting a comment  - editing a post  - creating a user          Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.   It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.   This method returns a list of events. 
         * @param {EventApiListEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents(requestParameters: EventApiListEventsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<EventsInner>> {
            return localVarFp.listEvents(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listEvents operation in EventApi.
 * @export
 * @interface EventApiListEventsRequest
 */
export type EventApiListEventsRequest = {
    
    /**
    * Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 
    * @type {string}
    * @memberof EventApiListEvents
    */
    readonly site: string
    
    /**
    * 
    * @type {number}
    * @memberof EventApiListEvents
    */
    readonly pagesize?: number
    
    /**
    * 
    * @type {number}
    * @memberof EventApiListEvents
    */
    readonly page?: number
    
    /**
    * #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
    * @type {string}
    * @memberof EventApiListEvents
    */
    readonly filter?: string
    
    /**
    * All API responses are JSON, we do support JSONP with the callback query parameter. 
    * @type {string}
    * @memberof EventApiListEvents
    */
    readonly callback?: string
    
    /**
    * Unix date.
    * @type {number}
    * @memberof EventApiListEvents
    */
    readonly since?: number
    
}

/**
 * EventApiGenerated - object-oriented interface
 * @export
 * @class EventApiGenerated
 * @extends {BaseAPI}
 */
export class EventApiGenerated extends BaseAPI {
    /**
     * Returns a stream of events that have occurred on the site.   The API considers the following \"events\":  - posting a question  - posting an answer  - posting a comment  - editing a post  - creating a user          Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.   It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.   This method returns a list of events. 
     * @param {EventApiListEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiGenerated
     */
    public listEvents(requestParameters: EventApiListEventsRequest, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).listEvents(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}