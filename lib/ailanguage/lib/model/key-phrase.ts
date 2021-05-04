/**
 * Oracle Cloud Infrastructure Artificial Intelligence Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately using our proven,
    pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
    This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20210101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Key phrase and score for the given text.
 */
export interface KeyPhrase {
  /**
   * Key phrase of the the given text.
   */
  "text": string;
  /**
   * Score of the given key phrase. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "score": number;
}

export namespace KeyPhrase {
  export function getJsonObj(obj: KeyPhrase): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
