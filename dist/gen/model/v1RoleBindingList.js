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
exports.V1RoleBindingList = void 0;
/**
* RoleBindingList is a collection of RoleBindings
*/
class V1RoleBindingList {
    static getAttributeTypeMap() {
        return V1RoleBindingList.attributeTypeMap;
    }
}
exports.V1RoleBindingList = V1RoleBindingList;
V1RoleBindingList.discriminator = undefined;
V1RoleBindingList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1RoleBinding>"
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
//# sourceMappingURL=v1RoleBindingList.js.map