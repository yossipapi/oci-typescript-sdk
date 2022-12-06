/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListSensitiveColumns.ts.html |here} to see how to use ListSensitiveColumnsRequest.
 */
export interface ListSensitiveColumnsRequest extends common.BaseRequest {
  /**
   * The OCID of the sensitive data model.
   */
  "sensitiveDataModelId": string;
  /**
   * A filter to return only the resources that were created after the specified date and time, as defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Using TimeCreatedGreaterThanOrEqualToQueryParam parameter retrieves all resources created after that date.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * Search for resources that were created before a specific date.
   * Specifying this parameter corresponding `timeCreatedLessThan`
   * parameter will retrieve all resources created before the
   * specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedLessThan"?: Date;
  /**
   * Search for resources that were updated after a specific date.
   * Specifying this parameter corresponding `timeUpdatedGreaterThanOrEqualTo`
   * parameter will retrieve all resources updated after the
   * specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   *
   */
  "timeUpdatedGreaterThanOrEqualTo"?: Date;
  /**
   * Search for resources that were updated before a specific date.
   * Specifying this parameter corresponding `timeUpdatedLessThan`
   * parameter will retrieve all resources updated before the
   * specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   *
   */
  "timeUpdatedLessThan"?: Date;
  /**
   * Filters the sensitive column resources with the given lifecycle state values.
   */
  "sensitiveColumnLifecycleState"?: model.SensitiveColumnLifecycleState;
  /**
   * A filter to return only items related to specific schema name.
   */
  "schemaName"?: Array<string>;
  /**
   * A filter to return only items related to a specific object name.
   */
  "objectName"?: Array<string>;
  /**
   * A filter to return only a specific column based on column name.
   */
  "columnName"?: Array<string>;
  /**
   * A filter to return only items related to a specific object type.
   */
  "objectType"?: Array<ListSensitiveColumnsRequest.ObjectType>;
  /**
   * A filter to return only the resources that match the specified data types.
   */
  "dataType"?: Array<string>;
  /**
   * A filter to return only the sensitive columns that match the specified status.
   */
  "status"?: Array<ListSensitiveColumnsRequest.Status>;
  /**
   * A filter to return only the sensitive columns that are associated with one of the sensitive types identified by the specified OCIDs.
   */
  "sensitiveTypeId"?: Array<string>;
  /**
   * A filter to return only the sensitive columns that are children of one of the columns identified by the specified keys.
   */
  "parentColumnKey"?: Array<string>;
  /**
   * A filter to return sensitive columns based on their relationship with their parent columns. If set to NONE,
   * it returns the sensitive columns that do not have any parent. The response includes the parent columns as
   * well as the independent columns that are not in any relationship. If set to APP_DEFINED, it returns all the
   * child columns that have application-level (non-dictionary) relationship with their parents. If set to DB_DEFINED,
   * it returns all the child columns that have database-level (dictionary-defined) relationship with their parents.
   *
   */
  "relationType"?: Array<ListSensitiveColumnsRequest.RelationType>;
  /**
   * A filter to return only the sensitive columns that belong to the specified column group.
   */
  "columnGroup"?: string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListSensitiveColumnsRequest.SortOrder;
  /**
   * The field to sort by. You can specify only one sort order (sortOrder). The default order for timeCreated is descending.
   * The default order for schemaName, objectName, and columnName is ascending.
   *
   */
  "sortBy"?: ListSensitiveColumnsRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListSensitiveColumnsRequest {
  export enum ObjectType {
    All = "ALL",
    Table = "TABLE",
    EditioningView = "EDITIONING_VIEW"
  }

  export enum Status {
    Valid = "VALID",
    Invalid = "INVALID"
  }

  export enum RelationType {
    None = "NONE",
    AppDefined = "APP_DEFINED",
    DbDefined = "DB_DEFINED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    SchemaName = "schemaName",
    ObjectName = "objectName",
    ColumnName = "columnName",
    DataType = "dataType"
  }
}
