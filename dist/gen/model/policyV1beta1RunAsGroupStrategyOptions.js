"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
*/
class PolicyV1beta1RunAsGroupStrategyOptions {
    static getAttributeTypeMap() {
        return PolicyV1beta1RunAsGroupStrategyOptions.attributeTypeMap;
    }
}
PolicyV1beta1RunAsGroupStrategyOptions.discriminator = undefined;
PolicyV1beta1RunAsGroupStrategyOptions.attributeTypeMap = [
    {
        "name": "ranges",
        "baseName": "ranges",
        "type": "Array<PolicyV1beta1IDRange>"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    }
];
exports.PolicyV1beta1RunAsGroupStrategyOptions = PolicyV1beta1RunAsGroupStrategyOptions;
//# sourceMappingURL=policyV1beta1RunAsGroupStrategyOptions.js.map