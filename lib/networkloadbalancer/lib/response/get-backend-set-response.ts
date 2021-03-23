/**
 *
 *
 * OpenAPI spec version: 20200501
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

export interface GetBackendSetResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you must contact
   * Oracle about a particular request, then provide the request identifier.
   *
   */
  "opcRequestId": string;
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag": string;
  /**
   * The returned model.BackendSet instance.
   */
  "backendSet": model.BackendSet;
}
