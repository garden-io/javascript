"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Scale represents a scaling request for a resource.
*/
class V1beta2Scale {
    static getAttributeTypeMap() {
        return V1beta2Scale.attributeTypeMap;
    }
}
V1beta2Scale.discriminator = undefined;
V1beta2Scale.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1beta2ScaleSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta2ScaleStatus"
    }
];
exports.V1beta2Scale = V1beta2Scale;
//# sourceMappingURL=v1beta2Scale.js.map