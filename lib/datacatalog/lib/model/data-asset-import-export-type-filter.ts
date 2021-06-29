/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
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
 * Type of Data Asset import and export as described below.
 * ALL - Includes all supported elements of the data asset enumerated by the other type filters.
 * CUSTOM_PROPERTY_VALUES - Includes custom property values set on the objects within the export scope.
 *
 **/
export enum DataAssetImportExportTypeFilter {
  CustomPropertyValues = "CUSTOM_PROPERTY_VALUES",
  All = "ALL"
}

export namespace DataAssetImportExportTypeFilter {
  export function getJsonObj(obj: DataAssetImportExportTypeFilter): object {
    return { obj };
  }
}
