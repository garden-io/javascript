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
exports.AdmissionregistrationV1beta1ServiceReference = void 0;
/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
class AdmissionregistrationV1beta1ServiceReference {
    static getAttributeTypeMap() {
        return AdmissionregistrationV1beta1ServiceReference.attributeTypeMap;
    }
}
exports.AdmissionregistrationV1beta1ServiceReference = AdmissionregistrationV1beta1ServiceReference;
AdmissionregistrationV1beta1ServiceReference.discriminator = undefined;
AdmissionregistrationV1beta1ServiceReference.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
//# sourceMappingURL=admissionregistrationV1beta1ServiceReference.js.map