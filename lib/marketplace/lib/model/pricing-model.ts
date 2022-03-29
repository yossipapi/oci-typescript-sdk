/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for pricing.
 */
export interface PricingModel {
  /**
   * The type of the pricing model.
   */
  "type": model.PricingTypeEnum;
  /**
   * The type of pricing for a PAYGO model, eg PER_OCPU_LINEAR, PER_OCPU_MIN_BILLING, PER_INSTANCE.  Null if type is not PAYGO.
   */
  "payGoStrategy"?: model.PricingStrategyEnum;
  /**
   * The currency of the pricing model.
   */
  "currency"?: model.PricingCurrencyEnum;
  /**
   * The pricing rate. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rate"?: number;
  "internationalMarketPrice"?: model.InternationalMarketPrice;
}

export namespace PricingModel {
  export function getJsonObj(obj: PricingModel): object {
    const jsonObj = {
      ...obj,
      ...{
        "internationalMarketPrice": obj.internationalMarketPrice
          ? model.InternationalMarketPrice.getJsonObj(obj.internationalMarketPrice)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PricingModel): object {
    const jsonObj = {
      ...obj,
      ...{
        "internationalMarketPrice": obj.internationalMarketPrice
          ? model.InternationalMarketPrice.getDeserializedJsonObj(obj.internationalMarketPrice)
          : undefined
      }
    };

    return jsonObj;
  }
}
