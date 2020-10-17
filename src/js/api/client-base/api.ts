// tslint:disable
/**
 * sample
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Book
 */
export interface Book {
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    title: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} bookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchBook: async (bookId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bookId' is not null or undefined
            if (bookId === null || bookId === undefined) {
                throw new RequiredError('bookId','Required parameter bookId was null or undefined when calling fetchBook.');
            }
            const localVarPath = `/api/books/{book_id}`
                .replace(`{${"book_id"}}`, encodeURIComponent(String(bookId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} bookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchBook(bookId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Book>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).fetchBook(bookId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} bookId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchBook(bookId: string, options?: any): AxiosPromise<Book> {
            return DefaultApiFp(configuration).fetchBook(bookId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {string} bookId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public fetchBook(bookId: string, options?: any) {
        return DefaultApiFp(this.configuration).fetchBook(bookId, options).then((request) => request(this.axios, this.basePath));
    }

}


