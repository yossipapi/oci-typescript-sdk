/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of a schema fetched from the database.
 */
export interface SchemaSummary {
  /**
   * Name of the schema.
   */
  "schemaName": string;
  /**
   * Indicates if the schema is oracle supplied.
   */
  "isOracleMaintained": boolean;
}

export namespace SchemaSummary {
  export function getJsonObj(obj: SchemaSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SchemaSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}