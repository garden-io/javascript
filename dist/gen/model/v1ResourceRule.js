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
exports.V1ResourceRule = void 0;
/**
* ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
*/
class V1ResourceRule {
    static getAttributeTypeMap() {
        return V1ResourceRule.attributeTypeMap;
    }
}
exports.V1ResourceRule = V1ResourceRule;
V1ResourceRule.discriminator = undefined;
V1ResourceRule.attributeTypeMap = [
    {
        "name": "apiGroups",
        "baseName": "apiGroups",
        "type": "Array<string>"
    },
    {
        "name": "resourceNames",
        "baseName": "resourceNames",
        "type": "Array<string>"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<string>"
    },
    {
        "name": "verbs",
        "baseName": "verbs",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=v1ResourceRule.js.map