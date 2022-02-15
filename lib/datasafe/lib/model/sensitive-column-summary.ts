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
 * Summary of a sensitive column present in a sensitive data model.
 */
export interface SensitiveColumnSummary {
  /**
   * The unique key that identifies the sensitive column. It's numeric and unique within a sensitive data model.
   */
  "key": string;
  /**
   * The OCID of the sensitive data model that contains the sensitive column.
   */
  "sensitiveDataModelId": string;
  /**
   * The current state of the sensitive column.
   */
  "lifecycleState": model.SensitiveColumnLifecycleState;
  /**
   * Details about the current state of the sensitive column.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339),
   * the sensitive column was created in the sensitive data model.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339),
   * the sensitive column was last updated in the sensitive data model.
   *
   */
  "timeUpdated": Date;
  /**
   * The name of the application associated with the sensitive column. It's useful when the application name is
   * different from the schema name. Otherwise, it can be ignored.
   *
   */
  "appName": string;
  /**
   * The database schema that contains the sensitive column.
   */
  "schemaName": string;
  /**
   * The database object that contains the sensitive column.
   */
  "objectName": string;
  /**
   * The name of the sensitive column.
   */
  "columnName": string;
  /**
   * The type of the database object that contains the sensitive column.
   */
  "objectType": SensitiveColumnSummary.ObjectType;
  /**
   * The data type of the sensitive column.
   */
  "dataType": string;
  /**
   * The status of the sensitive column. VALID means the column is considered sensitive. INVALID means the column
   * is not considered sensitive. Tracking invalid columns in a sensitive data model helps ensure that an
   * incremental data discovery job does not identify these columns as sensitive again.
   *
   */
  "status": SensitiveColumnSummary.Status;
  /**
   * The OCID of the sensitive type associated with the sensitive column.
   */
  "sensitiveTypeId"?: string;
  /**
   * The source of the sensitive column. DISCOVERY indicates that the column was added to the sensitive data model
   * using a data discovery job. MANUAL indicates that the column was added manually.
   *
   */
  "source": SensitiveColumnSummary.Source;
  /**
   * Unique keys identifying the columns that are parents of the sensitive column. At present, it tracks a single parent only.
   */
  "parentColumnKeys"?: Array<string>;
  /**
   * The type of referential relationship the sensitive column has with its parent. NONE indicates that the
   * sensitive column does not have a parent. DB_DEFINED indicates that the relationship is defined in the database
   * dictionary. APP_DEFINED indicates that the relationship is defined at the application level and not in the database dictionary.
   *
   */
  "relationType": SensitiveColumnSummary.RelationType;
  /**
   * The estimated number of data values the column has in the associated database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedDataValueCount": number;
  /**
   * Original data values collected for the sensitive column from the associated database. Sample data helps review
   * the column and ensure that it actually contains sensitive data. Note that sample data is retrieved by a data
   * discovery job only if the isSampleDataCollectionEnabled attribute is set to true. At present, only one data
   * value is collected per sensitive column.
   *
   */
  "sampleDataValues"?: Array<string>;
}

export namespace SensitiveColumnSummary {
  export enum ObjectType {
    Table = "TABLE",
    EditioningView = "EDITIONING_VIEW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Valid = "VALID",
    Invalid = "INVALID",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Source {
    Manual = "MANUAL",
    Discovery = "DISCOVERY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RelationType {
    None = "NONE",
    AppDefined = "APP_DEFINED",
    DbDefined = "DB_DEFINED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SensitiveColumnSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveColumnSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
