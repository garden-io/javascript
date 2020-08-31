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
exports.V1beta1StorageClassList = void 0;
/**
* StorageClassList is a collection of storage classes.
*/
class V1beta1StorageClassList {
    static getAttributeTypeMap() {
        return V1beta1StorageClassList.attributeTypeMap;
    }
}
exports.V1beta1StorageClassList = V1beta1StorageClassList;
V1beta1StorageClassList.discriminator = undefined;
V1beta1StorageClassList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1StorageClass>"
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
//# sourceMappingURL=v1beta1StorageClassList.js.map