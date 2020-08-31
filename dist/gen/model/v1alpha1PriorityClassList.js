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
exports.V1alpha1PriorityClassList = void 0;
/**
* PriorityClassList is a collection of priority classes.
*/
class V1alpha1PriorityClassList {
    static getAttributeTypeMap() {
        return V1alpha1PriorityClassList.attributeTypeMap;
    }
}
exports.V1alpha1PriorityClassList = V1alpha1PriorityClassList;
V1alpha1PriorityClassList.discriminator = undefined;
V1alpha1PriorityClassList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1alpha1PriorityClass>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
//# sourceMappingURL=v1alpha1PriorityClassList.js.map