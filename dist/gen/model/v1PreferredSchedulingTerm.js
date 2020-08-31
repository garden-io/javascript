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
exports.V1PreferredSchedulingTerm = void 0;
/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
*/
class V1PreferredSchedulingTerm {
    static getAttributeTypeMap() {
        return V1PreferredSchedulingTerm.attributeTypeMap;
    }
}
exports.V1PreferredSchedulingTerm = V1PreferredSchedulingTerm;
V1PreferredSchedulingTerm.discriminator = undefined;
V1PreferredSchedulingTerm.attributeTypeMap = [
    {
        "name": "preference",
        "baseName": "preference",
        "type": "V1NodeSelectorTerm"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
//# sourceMappingURL=v1PreferredSchedulingTerm.js.map