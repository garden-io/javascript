"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1alpha1AuditSinkSpec = void 0;
/**
* AuditSinkSpec holds the spec for the audit sink
*/
class V1alpha1AuditSinkSpec {
    static getAttributeTypeMap() {
        return V1alpha1AuditSinkSpec.attributeTypeMap;
    }
}
exports.V1alpha1AuditSinkSpec = V1alpha1AuditSinkSpec;
V1alpha1AuditSinkSpec.discriminator = undefined;
V1alpha1AuditSinkSpec.attributeTypeMap = [
    {
        "name": "policy",
        "baseName": "policy",
        "type": "V1alpha1Policy"
    },
    {
        "name": "webhook",
        "baseName": "webhook",
        "type": "V1alpha1Webhook"
    }
];
//# sourceMappingURL=v1alpha1AuditSinkSpec.js.map