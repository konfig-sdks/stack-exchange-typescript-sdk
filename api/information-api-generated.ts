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
import { InfoObject } from '../models';
// @ts-ignore
import { TagsInner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InformationApi - axios parameter creator
 * @export
 */
export const InformationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a collection of statistics about the site.   Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.   This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.   This method returns an info object. 
         * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \&quot;stackoverflow.com\&quot;), or a short form identified by api_site_parameter on the site object. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatistics: async (site: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'site' is not null or undefined
            assertParamExists('getStatistics', 'site', site)
            const localVarPath = `/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (site !== undefined) {
                localVarQueryParameter['site'] = site;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/info',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the tags found on a site.   The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.   This method returns a list of tags.   The sorts accepted by this method operate on the follow fields of the tag object:  - popular - count  - activity - the creation_date of the last question asked with the tag  - name - name   popular is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate. 
         * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \&quot;stackoverflow.com\&quot;), or a short form identified by api_site_parameter on the site object. 
         * @param {string} [inname] 
         * @param {'desc' | 'asc'} [order] 
         * @param {string} [max] sort &#x3D; popular &#x3D;&gt; number sort &#x3D; activity &#x3D;&gt; date sort &#x3D; name &#x3D;&gt; string 
         * @param {string} [min] sort &#x3D; popular &#x3D;&gt; number sort &#x3D; activity &#x3D;&gt; date sort &#x3D; name &#x3D;&gt; string 
         * @param {'popular' | 'activity' | 'name'} [sort] 
         * @param {number} [fromdate] Unix date.
         * @param {number} [todate] Unix date.
         * @param {number} [pagesize] 
         * @param {number} [page] 
         * @param {string} [filter] #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\&#39;s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \&quot;bake in\&quot; any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \&quot;safe\&quot; filter is mearly an \&quot;unsafe\&quot; one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \&quot;safe\&quot; data is the only accessible data it will be returned even in \&quot;unsafe\&quot; filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
         * @param {string} [callback] All API responses are JSON, we do support JSONP with the callback query parameter. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagsList: async (site: string, inname?: string, order?: 'desc' | 'asc', max?: string, min?: string, sort?: 'popular' | 'activity' | 'name', fromdate?: number, todate?: number, pagesize?: number, page?: number, filter?: string, callback?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'site' is not null or undefined
            assertParamExists('getTagsList', 'site', site)
            const localVarPath = `/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (inname !== undefined) {
                localVarQueryParameter['inname'] = inname;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/tags',
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
 * InformationApi - functional programming interface
 * @export
 */
export const InformationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InformationApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a collection of statistics about the site.   Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.   This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.   This method returns an info object. 
         * @param {InformationApiGetStatisticsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatistics(requestParameters: InformationApiGetStatisticsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InfoObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatistics(requestParameters.site, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the tags found on a site.   The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.   This method returns a list of tags.   The sorts accepted by this method operate on the follow fields of the tag object:  - popular - count  - activity - the creation_date of the last question asked with the tag  - name - name   popular is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate. 
         * @param {InformationApiGetTagsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTagsList(requestParameters: InformationApiGetTagsListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TagsInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTagsList(requestParameters.site, requestParameters.inname, requestParameters.order, requestParameters.max, requestParameters.min, requestParameters.sort, requestParameters.fromdate, requestParameters.todate, requestParameters.pagesize, requestParameters.page, requestParameters.filter, requestParameters.callback, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InformationApi - factory interface
 * @export
 */
export const InformationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InformationApiFp(configuration)
    return {
        /**
         * Returns a collection of statistics about the site.   Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.   This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.   This method returns an info object. 
         * @param {InformationApiGetStatisticsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatistics(requestParameters: InformationApiGetStatisticsRequest, options?: AxiosRequestConfig): AxiosPromise<InfoObject> {
            return localVarFp.getStatistics(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the tags found on a site.   The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.   This method returns a list of tags.   The sorts accepted by this method operate on the follow fields of the tag object:  - popular - count  - activity - the creation_date of the last question asked with the tag  - name - name   popular is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate. 
         * @param {InformationApiGetTagsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTagsList(requestParameters: InformationApiGetTagsListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<TagsInner>> {
            return localVarFp.getTagsList(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getStatistics operation in InformationApi.
 * @export
 * @interface InformationApiGetStatisticsRequest
 */
export type InformationApiGetStatisticsRequest = {
    
    /**
    * Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 
    * @type {string}
    * @memberof InformationApiGetStatistics
    */
    readonly site: string
    
}

/**
 * Request parameters for getTagsList operation in InformationApi.
 * @export
 * @interface InformationApiGetTagsListRequest
 */
export type InformationApiGetTagsListRequest = {
    
    /**
    * Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. \"stackoverflow.com\"), or a short form identified by api_site_parameter on the site object. 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly site: string
    
    /**
    * 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly inname?: string
    
    /**
    * 
    * @type {'desc' | 'asc'}
    * @memberof InformationApiGetTagsList
    */
    readonly order?: 'desc' | 'asc'
    
    /**
    * sort = popular => number sort = activity => date sort = name => string 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly max?: string
    
    /**
    * sort = popular => number sort = activity => date sort = name => string 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly min?: string
    
    /**
    * 
    * @type {'popular' | 'activity' | 'name'}
    * @memberof InformationApiGetTagsList
    */
    readonly sort?: 'popular' | 'activity' | 'name'
    
    /**
    * Unix date.
    * @type {number}
    * @memberof InformationApiGetTagsList
    */
    readonly fromdate?: number
    
    /**
    * Unix date.
    * @type {number}
    * @memberof InformationApiGetTagsList
    */
    readonly todate?: number
    
    /**
    * 
    * @type {number}
    * @memberof InformationApiGetTagsList
    */
    readonly pagesize?: number
    
    /**
    * 
    * @type {number}
    * @memberof InformationApiGetTagsList
    */
    readonly page?: number
    
    /**
    * #Discussion  The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user\'s badge counts it could exclude user.badge_counts whenever it calls a method that returns users.  An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.  Filters are immutable and non-expiring. An application can safely \"bake in\" any filters that are created, it is not necessary (or advisable) to create filters at runtime.  The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).  #Safety  Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.  Note that this does not mean that \"safe\" filter is mearly an \"unsafe\" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).  When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the \"safe\" data is the only accessible data it will be returned even in \"unsafe\" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.  #Built In Filters  The following filters are built in:  default, each type documents which fields are returned under the default filter (for example, answers). withbody, which is default plus the *.body fields none, which is empty total, which includes just .total  #Compatibility with V1.x  For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters. 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly filter?: string
    
    /**
    * All API responses are JSON, we do support JSONP with the callback query parameter. 
    * @type {string}
    * @memberof InformationApiGetTagsList
    */
    readonly callback?: string
    
}

/**
 * InformationApiGenerated - object-oriented interface
 * @export
 * @class InformationApiGenerated
 * @extends {BaseAPI}
 */
export class InformationApiGenerated extends BaseAPI {
    /**
     * Returns a collection of statistics about the site.   Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.   This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.   This method returns an info object. 
     * @param {InformationApiGetStatisticsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationApiGenerated
     */
    public getStatistics(requestParameters: InformationApiGetStatisticsRequest, options?: AxiosRequestConfig) {
        return InformationApiFp(this.configuration).getStatistics(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the tags found on a site.   The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both \"download\" and \"owner\" amongst others.   This method returns a list of tags.   The sorts accepted by this method operate on the follow fields of the tag object:  - popular - count  - activity - the creation_date of the last question asked with the tag  - name - name   popular is the default sort.    It is possible to create moderately complex queries using sort, min, max, fromdate, and todate. 
     * @param {InformationApiGetTagsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InformationApiGenerated
     */
    public getTagsList(requestParameters: InformationApiGetTagsListRequest, options?: AxiosRequestConfig) {
        return InformationApiFp(this.configuration).getTagsList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
