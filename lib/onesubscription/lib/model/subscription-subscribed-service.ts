/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Subscribed Service summary
 *
 */
export interface SubscriptionSubscribedService {
  /**
   * SPM internal Subscribed Service ID
   *
   */
  "id": string;
  "product"?: model.SubscriptionProduct;
  /**
   * Subscribed service quantity
   *
   */
  "quantity"?: string;
  /**
   * Subscribed service status
   *
   */
  "status"?: string;
  /**
   * Subscribed service operation type
   *
   */
  "operationType"?: string;
  /**
   * Subscribed service net unit price
   *
   */
  "netUnitPrice"?: string;
  /**
   * Subscribed service used amount
   *
   */
  "usedAmount"?: string;
  /**
   * Subscribed sercice available or remaining amount
   *
   */
  "availableAmount"?: string;
  /**
   * Funded Allocation line value
   * example: 12000.00
   *
   */
  "fundedAllocationValue"?: string;
  /**
   * This field contains the name of the partner to which the subscription belongs - depending on which the invoicing may differ
   *
   */
  "partnerTransactionType"?: string;
  /**
   * Term value in Months
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "termValue"?: number;
  /**
   * Term value UOM
   *
   */
  "termValueUom"?: string;
  /**
   * Booking Opportunity Number of Subscribed Service
   *
   */
  "bookingOptyNumber"?: string;
  /**
   * Subscribed service total value
   *
   */
  "totalValue"?: string;
  /**
   * Subscribed service Promotion Amount
   *
   */
  "originalPromoAmount"?: string;
  /**
   * Sales Order Number associated to the subscribed service
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "orderNumber"?: number;
  /**
   * Subscribed service data center region
   *
   */
  "dataCenterRegion"?: string;
  /**
   * Subscribed service pricing model
   *
   */
  "pricingModel"?: string;
  /**
   * Subscribed service program type
   *
   */
  "programType"?: string;
  /**
   * Subscribed service promotion type
   *
   */
  "promoType"?: string;
  /**
   * Subscribed service CSI number
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "csi"?: number;
  /**
   * Subscribed service intent to pay flag
   *
   */
  "isIntentToPay"?: boolean;
  /**
   * Subscribed service start date
   *
   */
  "timeStart"?: Date;
  /**
   * Subscribed service end date
   *
   */
  "timeEnd"?: Date;
  /**
   * List of Commitment services of a line
   *
   */
  "commitmentServices"?: Array<model.CommitmentService>;
}

export namespace SubscriptionSubscribedService {
  export function getJsonObj(obj: SubscriptionSubscribedService): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product ? model.SubscriptionProduct.getJsonObj(obj.product) : undefined,

        "commitmentServices": obj.commitmentServices
          ? obj.commitmentServices.map(item => {
              return model.CommitmentService.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionSubscribedService): object {
    const jsonObj = {
      ...obj,
      ...{
        "product": obj.product
          ? model.SubscriptionProduct.getDeserializedJsonObj(obj.product)
          : undefined,

        "commitmentServices": obj.commitmentServices
          ? obj.commitmentServices.map(item => {
              return model.CommitmentService.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
