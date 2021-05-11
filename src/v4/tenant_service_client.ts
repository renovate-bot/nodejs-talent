// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v4/tenant_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './tenant_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  A service that handles tenant management, including CRUD and enumeration.
 * @class
 * @memberof v4
 */
export class TenantServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  tenantServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of TenantServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof TenantServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      companyPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/companies/{company}'
      ),
      jobPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/jobs/{job}'
      ),
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
      tenantPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listTenants: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'tenants'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.talent.v4.TenantService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.tenantServiceStub) {
      return this.tenantServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.talent.v4.TenantService.
    this.tenantServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.talent.v4.TenantService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.talent.v4.TenantService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const tenantServiceStubMethods = [
      'createTenant',
      'getTenant',
      'updateTenant',
      'deleteTenant',
      'listTenants',
    ];
    for (const methodName of tenantServiceStubMethods) {
      const callPromise = this.tenantServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.tenantServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'jobs.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'jobs.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/jobs',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  createTenant(
    request: protos.google.cloud.talent.v4.ICreateTenantRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.ICreateTenantRequest | undefined,
      {} | undefined
    ]
  >;
  createTenant(
    request: protos.google.cloud.talent.v4.ICreateTenantRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.ICreateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  createTenant(
    request: protos.google.cloud.talent.v4.ICreateTenantRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.ICreateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a new tenant entity.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the project under which the tenant is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/foo".
   * @param {google.cloud.talent.v4.Tenant} request.tenant
   *   Required. The tenant to be created.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tenant]{@link google.cloud.talent.v4.Tenant}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.createTenant(request);
   */
  createTenant(
    request: protos.google.cloud.talent.v4.ICreateTenantRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ITenant,
          protos.google.cloud.talent.v4.ICreateTenantRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.ICreateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.ICreateTenantRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.createTenant(request, options, callback);
  }
  getTenant(
    request: protos.google.cloud.talent.v4.IGetTenantRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IGetTenantRequest | undefined,
      {} | undefined
    ]
  >;
  getTenant(
    request: protos.google.cloud.talent.v4.IGetTenantRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IGetTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getTenant(
    request: protos.google.cloud.talent.v4.IGetTenantRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IGetTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Retrieves specified tenant.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the tenant to be retrieved.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tenant]{@link google.cloud.talent.v4.Tenant}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.getTenant(request);
   */
  getTenant(
    request: protos.google.cloud.talent.v4.IGetTenantRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ITenant,
          protos.google.cloud.talent.v4.IGetTenantRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IGetTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IGetTenantRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.getTenant(request, options, callback);
  }
  updateTenant(
    request: protos.google.cloud.talent.v4.IUpdateTenantRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IUpdateTenantRequest | undefined,
      {} | undefined
    ]
  >;
  updateTenant(
    request: protos.google.cloud.talent.v4.IUpdateTenantRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IUpdateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  updateTenant(
    request: protos.google.cloud.talent.v4.IUpdateTenantRequest,
    callback: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IUpdateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Updates specified tenant.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.cloud.talent.v4.Tenant} request.tenant
   *   Required. The tenant resource to replace the current resource in the system.
   * @param {google.protobuf.FieldMask} request.updateMask
   *   Strongly recommended for the best service experience.
   *
   *   If {@link google.cloud.talent.v4.UpdateTenantRequest.update_mask|update_mask} is provided, only the specified fields in
   *   {@link google.cloud.talent.v4.UpdateTenantRequest.tenant|tenant} are updated. Otherwise all the fields are updated.
   *
   *   A field mask to specify the tenant fields to be updated. Only
   *   top level fields of {@link google.cloud.talent.v4.Tenant|Tenant} are supported.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tenant]{@link google.cloud.talent.v4.Tenant}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.updateTenant(request);
   */
  updateTenant(
    request: protos.google.cloud.talent.v4.IUpdateTenantRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.talent.v4.ITenant,
          protos.google.cloud.talent.v4.IUpdateTenantRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IUpdateTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant,
      protos.google.cloud.talent.v4.IUpdateTenantRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'tenant.name': request.tenant!.name || '',
      });
    this.initialize();
    return this.innerApiCalls.updateTenant(request, options, callback);
  }
  deleteTenant(
    request: protos.google.cloud.talent.v4.IDeleteTenantRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteTenantRequest | undefined,
      {} | undefined
    ]
  >;
  deleteTenant(
    request: protos.google.cloud.talent.v4.IDeleteTenantRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  deleteTenant(
    request: protos.google.cloud.talent.v4.IDeleteTenantRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes specified tenant.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the tenant to be deleted.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/foo/tenants/bar".
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.deleteTenant(request);
   */
  deleteTenant(
    request: protos.google.cloud.talent.v4.IDeleteTenantRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          protos.google.cloud.talent.v4.IDeleteTenantRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteTenantRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.cloud.talent.v4.IDeleteTenantRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        name: request.name || '',
      });
    this.initialize();
    return this.innerApiCalls.deleteTenant(request, options, callback);
  }

  listTenants(
    request: protos.google.cloud.talent.v4.IListTenantsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant[],
      protos.google.cloud.talent.v4.IListTenantsRequest | null,
      protos.google.cloud.talent.v4.IListTenantsResponse
    ]
  >;
  listTenants(
    request: protos.google.cloud.talent.v4.IListTenantsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.cloud.talent.v4.IListTenantsRequest,
      protos.google.cloud.talent.v4.IListTenantsResponse | null | undefined,
      protos.google.cloud.talent.v4.ITenant
    >
  ): void;
  listTenants(
    request: protos.google.cloud.talent.v4.IListTenantsRequest,
    callback: PaginationCallback<
      protos.google.cloud.talent.v4.IListTenantsRequest,
      protos.google.cloud.talent.v4.IListTenantsResponse | null | undefined,
      protos.google.cloud.talent.v4.ITenant
    >
  ): void;
  /**
   * Lists all tenants associated with the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the project under which the tenant is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/foo".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of tenants to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Tenant]{@link google.cloud.talent.v4.Tenant}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listTenantsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listTenants(
    request: protos.google.cloud.talent.v4.IListTenantsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.cloud.talent.v4.IListTenantsRequest,
          protos.google.cloud.talent.v4.IListTenantsResponse | null | undefined,
          protos.google.cloud.talent.v4.ITenant
        >,
    callback?: PaginationCallback<
      protos.google.cloud.talent.v4.IListTenantsRequest,
      protos.google.cloud.talent.v4.IListTenantsResponse | null | undefined,
      protos.google.cloud.talent.v4.ITenant
    >
  ): Promise<
    [
      protos.google.cloud.talent.v4.ITenant[],
      protos.google.cloud.talent.v4.IListTenantsRequest | null,
      protos.google.cloud.talent.v4.IListTenantsResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    this.initialize();
    return this.innerApiCalls.listTenants(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the project under which the tenant is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/foo".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of tenants to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Tenant]{@link google.cloud.talent.v4.Tenant} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listTenantsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listTenantsStream(
    request?: protos.google.cloud.talent.v4.IListTenantsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listTenants.createStream(
      this.innerApiCalls.listTenants as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listTenants`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the project under which the tenant is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/foo".
   * @param {string} request.pageToken
   *   The starting indicator from which to return results.
   * @param {number} request.pageSize
   *   The maximum number of tenants to be returned, at most 100.
   *   Default is 100 if a non-positive number is provided.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [Tenant]{@link google.cloud.talent.v4.Tenant}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listTenantsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listTenantsAsync(
    request?: protos.google.cloud.talent.v4.IListTenantsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.cloud.talent.v4.ITenant> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        parent: request.parent || '',
      });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listTenants.asyncIterate(
      this.innerApiCalls['listTenants'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.talent.v4.ITenant>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified company resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} company
   * @returns {string} Resource name string.
   */
  companyPath(project: string, tenant: string, company: string) {
    return this.pathTemplates.companyPathTemplate.render({
      project: project,
      tenant: tenant,
      company: company,
    });
  }

  /**
   * Parse the project from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).project;
  }

  /**
   * Parse the tenant from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).tenant;
  }

  /**
   * Parse the company from Company resource.
   *
   * @param {string} companyName
   *   A fully-qualified path representing Company resource.
   * @returns {string} A string representing the company.
   */
  matchCompanyFromCompanyName(companyName: string) {
    return this.pathTemplates.companyPathTemplate.match(companyName).company;
  }

  /**
   * Return a fully-qualified job resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @param {string} job
   * @returns {string} Resource name string.
   */
  jobPath(project: string, tenant: string, job: string) {
    return this.pathTemplates.jobPathTemplate.render({
      project: project,
      tenant: tenant,
      job: job,
    });
  }

  /**
   * Parse the project from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).project;
  }

  /**
   * Parse the tenant from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).tenant;
  }

  /**
   * Parse the job from Job resource.
   *
   * @param {string} jobName
   *   A fully-qualified path representing Job resource.
   * @returns {string} A string representing the job.
   */
  matchJobFromJobName(jobName: string) {
    return this.pathTemplates.jobPathTemplate.match(jobName).job;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Return a fully-qualified tenant resource name string.
   *
   * @param {string} project
   * @param {string} tenant
   * @returns {string} Resource name string.
   */
  tenantPath(project: string, tenant: string) {
    return this.pathTemplates.tenantPathTemplate.render({
      project: project,
      tenant: tenant,
    });
  }

  /**
   * Parse the project from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).project;
  }

  /**
   * Parse the tenant from Tenant resource.
   *
   * @param {string} tenantName
   *   A fully-qualified path representing Tenant resource.
   * @returns {string} A string representing the tenant.
   */
  matchTenantFromTenantName(tenantName: string) {
    return this.pathTemplates.tenantPathTemplate.match(tenantName).tenant;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.tenantServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
