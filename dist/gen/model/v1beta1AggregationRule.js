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
exports.V1beta1AggregationRule = void 0;
/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
class V1beta1AggregationRule {
    static getAttributeTypeMap() {
        return V1beta1AggregationRule.attributeTypeMap;
    }
}
exports.V1beta1AggregationRule = V1beta1AggregationRule;
V1beta1AggregationRule.discriminator = undefined;
V1beta1AggregationRule.attributeTypeMap = [
    {
        "name": "clusterRoleSelectors",
        "baseName": "clusterRoleSelectors",
        "type": "Array<V1LabelSelector>"
    }
];
//# sourceMappingURL=v1beta1AggregationRule.js.map