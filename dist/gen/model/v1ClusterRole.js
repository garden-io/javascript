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
exports.V1ClusterRole = void 0;
/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
*/
class V1ClusterRole {
    static getAttributeTypeMap() {
        return V1ClusterRole.attributeTypeMap;
    }
}
exports.V1ClusterRole = V1ClusterRole;
V1ClusterRole.discriminator = undefined;
V1ClusterRole.attributeTypeMap = [
    {
        "name": "aggregationRule",
        "baseName": "aggregationRule",
        "type": "V1AggregationRule"
    },
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
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1PolicyRule>"
    }
];
//# sourceMappingURL=v1ClusterRole.js.map