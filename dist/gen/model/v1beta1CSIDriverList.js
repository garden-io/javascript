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
exports.V1beta1CSIDriverList = void 0;
/**
* CSIDriverList is a collection of CSIDriver objects.
*/
class V1beta1CSIDriverList {
    static getAttributeTypeMap() {
        return V1beta1CSIDriverList.attributeTypeMap;
    }
}
exports.V1beta1CSIDriverList = V1beta1CSIDriverList;
V1beta1CSIDriverList.discriminator = undefined;
V1beta1CSIDriverList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1CSIDriver>"
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
//# sourceMappingURL=v1beta1CSIDriverList.js.map