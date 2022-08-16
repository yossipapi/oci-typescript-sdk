/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Payment related details
 */
export interface PaymentDetail {
  /**
   * Paid the invoice on this day
   */
  "timePaidOn"?: Date;
  /**
   * example
   */
  "paidBy"?: string;
  /**
   * Amount that paid Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "amountPaid"?: number;

  "paymentMethod": string;
}

export namespace PaymentDetail {
  export function getJsonObj(obj: PaymentDetail): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "paymentMethod" in obj && obj.paymentMethod) {
      switch (obj.paymentMethod) {
        case "OTHER":
          return model.OtherPaymentDetail.getJsonObj(
            <model.OtherPaymentDetail>(<object>jsonObj),
            true
          );
        case "PAYPAL":
          return model.PaypalPaymentDetail.getJsonObj(
            <model.PaypalPaymentDetail>(<object>jsonObj),
            true
          );
        case "CREDIT_CARD":
          return model.CreditCardPaymentDetail.getJsonObj(
            <model.CreditCardPaymentDetail>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.paymentMethod}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PaymentDetail): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "paymentMethod" in obj && obj.paymentMethod) {
      switch (obj.paymentMethod) {
        case "OTHER":
          return model.OtherPaymentDetail.getDeserializedJsonObj(
            <model.OtherPaymentDetail>(<object>jsonObj),
            true
          );
        case "PAYPAL":
          return model.PaypalPaymentDetail.getDeserializedJsonObj(
            <model.PaypalPaymentDetail>(<object>jsonObj),
            true
          );
        case "CREDIT_CARD":
          return model.CreditCardPaymentDetail.getDeserializedJsonObj(
            <model.CreditCardPaymentDetail>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.paymentMethod}`);
      }
    }
    return jsonObj;
  }
}
