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
exports.V1beta1AllowedCSIDriver = void 0;
/**
* AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
*/
class V1beta1AllowedCSIDriver {
    static getAttributeTypeMap() {
        return V1beta1AllowedCSIDriver.attributeTypeMap;
    }
}
exports.V1beta1AllowedCSIDriver = V1beta1AllowedCSIDriver;
V1beta1AllowedCSIDriver.discriminator = undefined;
V1beta1AllowedCSIDriver.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=v1beta1AllowedCSIDriver.js.map