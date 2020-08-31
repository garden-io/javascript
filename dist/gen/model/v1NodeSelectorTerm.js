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
exports.V1NodeSelectorTerm = void 0;
/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
class V1NodeSelectorTerm {
    static getAttributeTypeMap() {
        return V1NodeSelectorTerm.attributeTypeMap;
    }
}
exports.V1NodeSelectorTerm = V1NodeSelectorTerm;
V1NodeSelectorTerm.discriminator = undefined;
V1NodeSelectorTerm.attributeTypeMap = [
    {
        "name": "matchExpressions",
        "baseName": "matchExpressions",
        "type": "Array<V1NodeSelectorRequirement>"
    },
    {
        "name": "matchFields",
        "baseName": "matchFields",
        "type": "Array<V1NodeSelectorRequirement>"
    }
];
//# sourceMappingURL=v1NodeSelectorTerm.js.map