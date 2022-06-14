/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The details of the key store.
 */
export interface DatabaseToolsKeyStoreMySqlDetails {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreTypeMySql;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretIdMySqlDetails;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretIdMySqlDetails;
}

export namespace DatabaseToolsKeyStoreMySqlDetails {
  export function getJsonObj(obj: DatabaseToolsKeyStoreMySqlDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentMySqlDetails.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordMySqlDetails.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStoreMySqlDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentMySqlDetails.getDeserializedJsonObj(
              obj.keyStoreContent
            )
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordMySqlDetails.getDeserializedJsonObj(
              obj.keyStorePassword
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
