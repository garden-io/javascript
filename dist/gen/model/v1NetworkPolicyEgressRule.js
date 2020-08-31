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
exports.V1NetworkPolicyEgressRule = void 0;
/**
* NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec\'s podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
*/
class V1NetworkPolicyEgressRule {
    static getAttributeTypeMap() {
        return V1NetworkPolicyEgressRule.attributeTypeMap;
    }
}
exports.V1NetworkPolicyEgressRule = V1NetworkPolicyEgressRule;
V1NetworkPolicyEgressRule.discriminator = undefined;
V1NetworkPolicyEgressRule.attributeTypeMap = [
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<V1NetworkPolicyPort>"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<V1NetworkPolicyPeer>"
    }
];
//# sourceMappingURL=v1NetworkPolicyEgressRule.js.map