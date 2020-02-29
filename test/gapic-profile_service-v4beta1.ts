// Copyright 2019 Google LLC
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

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const profileserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v4beta1.ProfileServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      profileserviceModule.v4beta1.ProfileServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      profileserviceModule.v4beta1.ProfileServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = profileserviceModule.v4beta1.ProfileServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new profileserviceModule.v4beta1.ProfileServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new profileserviceModule.v4beta1.ProfileServiceClient({
      fallback: true,
    });
    assert(client);
  });
  describe('createProfile', () => {
    it('invokes createProfile without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ICreateProfileRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createProfile(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProfile with error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ICreateProfileRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createProfile(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getProfile', () => {
    it('invokes getProfile without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IGetProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getProfile(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProfile with error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IGetProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getProfile(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateProfile', () => {
    it('invokes updateProfile without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IUpdateProfileRequest = {};
      request.profile = {};
      request.profile.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateProfile(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProfile with error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IUpdateProfileRequest = {};
      request.profile = {};
      request.profile.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateProfile(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteProfile', () => {
    it('invokes deleteProfile without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IDeleteProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteProfile(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteProfile with error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IDeleteProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteProfile(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('searchProfiles', () => {
    it('invokes searchProfiles without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ISearchProfilesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.searchProfiles = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.searchProfiles(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes searchProfiles with error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.ISearchProfilesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.searchProfiles = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.searchProfiles(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listProfiles', () => {
    it('invokes listProfiles without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IListProfilesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listProfiles = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listProfiles(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listProfilesStream', () => {
    it('invokes listProfilesStream without error', done => {
      const client = new profileserviceModule.v4beta1.ProfileServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.talent.v4beta1.IListProfilesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listProfiles = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listProfilesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
