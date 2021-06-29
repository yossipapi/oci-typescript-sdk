/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 * The full information representing an email suppression.
 */
export interface Suppression {
  /**
   * The OCID of the compartment to contain the suppression. Since
   * suppressions are at the customer level, this must be the tenancy
   * OCID.
   *
   */
  "compartmentId": string;
  /**
   * Email address of the suppression.
   */
  "emailAddress": string;
  /**
   * The unique ID of the suppression.
   */
  "id": string;
  /**
   * The reason that the email address was suppressed. For more information on the types of bounces, see [Suppression List](https://docs.us-phoenix-1.oraclecloud.com/Content/Email/Concepts/overview.htm#components).
   */
  "reason"?: Suppression.Reason;
  /**
   * The date and time the suppression was added in \"YYYY-MM-ddThh:mmZ\"
   * format with a Z offset, as defined by RFC 3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The last date and time the suppression prevented submission
   * in \"YYYY-MM-ddThh:mmZ\"
   * format with a Z offset, as defined by RFC 3339.
   *
   */
  "timeLastSuppressed"?: Date;
  /**
   * The value of the Message-ID header from the email that triggered a suppression.
   * This value is as defined in RFC 5322 section 3.6.4, excluding angle-brackets.
   * Not provided for all types of suppressions.
   *
   */
  "messageId"?: string;
  /**
   * The specific error message returned by a system that resulted in the suppression.
   * This message is usually an SMTP error code with additional descriptive text.
   * Not provided for all types of suppressions.
   *
   */
  "errorDetail"?: string;
  /**
    * DNS name of the source of the error that caused the suppression.
* Will be set to either the remote-mta or reporting-mta field from a delivery status notification (RFC 3464) when available.
* Not provided for all types of suppressions, and not always known.
* <p>
Note: Most SMTP errors that cause suppressions come from software run by email receiving systems rather than from OCI email delivery itself.
* 
    */
  "errorSource"?: string;
}

export namespace Suppression {
  export enum Reason {
    Unknown = "UNKNOWN",
    Hardbounce = "HARDBOUNCE",
    Complaint = "COMPLAINT",
    Manual = "MANUAL",
    Softbounce = "SOFTBOUNCE",
    Unsubscribe = "UNSUBSCRIBE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Suppression): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
