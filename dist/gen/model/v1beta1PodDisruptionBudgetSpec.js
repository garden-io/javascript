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
exports.V1beta1PodDisruptionBudgetSpec = void 0;
/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
*/
class V1beta1PodDisruptionBudgetSpec {
    static getAttributeTypeMap() {
        return V1beta1PodDisruptionBudgetSpec.attributeTypeMap;
    }
}
exports.V1beta1PodDisruptionBudgetSpec = V1beta1PodDisruptionBudgetSpec;
V1beta1PodDisruptionBudgetSpec.discriminator = undefined;
V1beta1PodDisruptionBudgetSpec.attributeTypeMap = [
    {
        "name": "maxUnavailable",
        "baseName": "maxUnavailable",
        "type": "object"
    },
    {
        "name": "minAvailable",
        "baseName": "minAvailable",
        "type": "object"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    }
];
//# sourceMappingURL=v1beta1PodDisruptionBudgetSpec.js.map