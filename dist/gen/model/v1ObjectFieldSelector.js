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
exports.V1ObjectFieldSelector = void 0;
/**
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
class V1ObjectFieldSelector {
    static getAttributeTypeMap() {
        return V1ObjectFieldSelector.attributeTypeMap;
    }
}
exports.V1ObjectFieldSelector = V1ObjectFieldSelector;
V1ObjectFieldSelector.discriminator = undefined;
V1ObjectFieldSelector.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "fieldPath",
        "baseName": "fieldPath",
        "type": "string"
    }
];
//# sourceMappingURL=v1ObjectFieldSelector.js.map