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
exports.V1beta1CertificateSigningRequestCondition = void 0;
class V1beta1CertificateSigningRequestCondition {
    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequestCondition.attributeTypeMap;
    }
}
exports.V1beta1CertificateSigningRequestCondition = V1beta1CertificateSigningRequestCondition;
V1beta1CertificateSigningRequestCondition.discriminator = undefined;
V1beta1CertificateSigningRequestCondition.attributeTypeMap = [
    {
        "name": "lastUpdateTime",
        "baseName": "lastUpdateTime",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1CertificateSigningRequestCondition.js.map