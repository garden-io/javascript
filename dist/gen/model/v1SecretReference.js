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
exports.V1SecretReference = void 0;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
class V1SecretReference {
    static getAttributeTypeMap() {
        return V1SecretReference.attributeTypeMap;
    }
}
exports.V1SecretReference = V1SecretReference;
V1SecretReference.discriminator = undefined;
V1SecretReference.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    }
];
//# sourceMappingURL=v1SecretReference.js.map