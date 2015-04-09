/* Copyright 2015 Open Ag Data Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;
//var oauthDynRegMetadata = require('../');
var mut = require('../');

describe('oauth-dyn-reg-metadata', function() {

    // This is probably a useless test
    it('should be exported', function() {
        //expect(oauthDynRegMetadata).to.be.ok;
        expect(mut).to.be.ok;
    });
});
