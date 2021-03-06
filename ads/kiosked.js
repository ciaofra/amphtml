/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {validateData, writeScript} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function kiosked(global, data) {
  let scriptId;
  validateData(data, ['scriptid'], []);
  if (data.hasOwnProperty('scriptid')) {
    scriptId = data['scriptid'];
  }
  window.addEventListener('kioskedAdRender', function() {
    global.context.renderStart();
  }, false);

  window.addEventListener('kioskedAdNoFill', function() {
    global.context.noContentAvailable();
  }, false);

  writeScript(global, 'https://scripts.kiosked.com/loader/kiosked-ad.js?staticTagId=' + scriptId);

}
