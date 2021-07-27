/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/ListDatabaseInsights.ts.html |here} to see how to use ListDatabaseInsightsRequest.
 */
export interface ListDatabaseInsightsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Unique Enterprise Manager bridge identifier
   */
  "enterpriseManagerBridgeId"?: string;
  /**
   * Optional list of database insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: Array<string>;
  /**
   * Resource Status
   */
  "status"?: Array<model.ResourceStatus>;
  /**
   * Lifecycle states
   */
  "lifecycleState"?: Array<model.LifecycleState>;
  /**
   * Filter by one or more database type.
   * Possible values are ADW-S, ATP-S, ADW-D, ATP-D, EXTERNAL-PDB, EXTERNAL-NONCDB.
   *
   */
  "databaseType"?: Array<ListDatabaseInsightsRequest.DatabaseType>;
  /**
   * Optional list of database [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the associated DBaaS entity.
   *
   */
  "databaseId"?: Array<string>;
  /**
   * Specifies the fields to return in a database summary response. By default all fields are returned if omitted.
   *
   */
  "fields"?: Array<ListDatabaseInsightsRequest.Fields>;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Database insight list sort options. If `fields` parameter is selected, the `sortBy` parameter must be one of the fields specified.
   *
   */
  "sortBy"?: ListDatabaseInsightsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListDatabaseInsightsRequest {
  export enum DatabaseType {
    AdwS = "ADW-S",
    AtpS = "ATP-S",
    AdwD = "ADW-D",
    AtpD = "ATP-D",
    ExternalPdb = "EXTERNAL-PDB",
    ExternalNoncdb = "EXTERNAL-NONCDB"
  }

  export enum Fields {
    CompartmentId = "compartmentId",
    DatabaseName = "databaseName",
    DatabaseDisplayName = "databaseDisplayName",
    DatabaseType = "databaseType",
    DatabaseVersion = "databaseVersion",
    DatabaseHostNames = "databaseHostNames",
    FreeformTags = "freeformTags",
    DefinedTags = "definedTags"
  }

  export enum SortBy {
    DatabaseName = "databaseName",
    DatabaseDisplayName = "databaseDisplayName",
    DatabaseType = "databaseType"
  }
}
