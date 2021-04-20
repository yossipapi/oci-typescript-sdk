/**
 *
 *
 * OpenAPI spec version: 20190325
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/ListAttributes.ts.html |here} to see how to use ListAttributesRequest.
 */
export interface ListAttributesRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * Unique entity key.
   */
  "entityKey": string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match the entire business name given. The match is not case sensitive.
   */
  "businessName"?: string;
  /**
   * A filter to return only resources that match display name or business name pattern given. The match is not case sensitive.
   * For Example : /folders?displayOrBusinessNameContains=Cu.*
   * The above would match all folders with display name or business name that starts with \"Cu\".
   *
   */
  "displayOrBusinessNameContains"?: string;
  /**
   * A filter to return only resources that match display name pattern given. The match is not case sensitive.
   * For Example : /folders?displayNameContains=Cu.*
   * The above would match all folders with display name that starts with \"Cu\".
   *
   */
  "displayNameContains"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time that the resource was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the resource.
   */
  "updatedById"?: string;
  /**
   * Unique external identifier of this resource in the external source system.
   */
  "externalKey"?: string;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * Data type as defined in an external system.
   */
  "externalTypeName"?: string;
  /**
   * Identifies whether this attribute can be used as a watermark to extract incremental data.
   */
  "isIncrementalData"?: boolean;
  /**
   * Identifies whether this attribute can be assigned null value.
   */
  "isNullable"?: boolean;
  /**
   * Max allowed length of the attribute value.
   */
  "length"?: number;
  /**
   * Position of the attribute in the record definition.
   */
  "position"?: number;
  /**
   * Precision of the attribute value usually applies to float data type.
   */
  "precision"?: number;
  /**
   * Scale of the attribute value usually applies to float data type.
   */
  "scale"?: number;
  /**
   * Specifies the fields to return in an entity attribute summary response.
   *
   */
  "fields"?: Array<ListAttributesRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListAttributesRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListAttributesRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAttributesRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    EntityKey = "entityKey",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    ExternalDataType = "externalDataType",
    ExternalKey = "externalKey",
    Length = "length",
    Precision = "precision",
    Scale = "scale",
    IsNullable = "isNullable",
    Uri = "uri",
    Path = "path",
    MinCollectionCount = "minCollectionCount",
    MaxCollectionCount = "maxCollectionCount",
    DatatypeEntityKey = "datatypeEntityKey",
    ExternalDatatypeEntityKey = "externalDatatypeEntityKey",
    ParentAttributeKey = "parentAttributeKey",
    ExternalParentAttributeKey = "externalParentAttributeKey"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
