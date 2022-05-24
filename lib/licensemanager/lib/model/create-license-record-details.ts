/**
 * License Manager API
 * Use the License Manager API to manage product licenses and license records. For more information, see [License Manager Overview](/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm).
 * OpenAPI spec version: 20220430
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details about the new license record.
 */
export interface CreateLicenseRecordDetails {
  /**
   * License record name.
   *
   */
  "displayName": string;
  /**
   * Specifies if the license record term is perpertual.
   */
  "isPerpetual": boolean;
  /**
   * The license record end date in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * date format.
   * Example: `2018-09-12`
   *
   */
  "expirationDate"?: Date;
  /**
   * The license record support end date in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * date format.
   * Example: `2018-09-12`
   *
   */
  "supportEndDate"?: Date;
  /**
   * Specifies if the license count is unlimited.
   */
  "isUnlimited": boolean;
  /**
   * The number of license units added by a user in a license record.
   * Default 1
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "licenseCount"?: number;
  /**
   * The license record product ID.
   */
  "productId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateLicenseRecordDetails {
  export function getJsonObj(obj: CreateLicenseRecordDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateLicenseRecordDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}