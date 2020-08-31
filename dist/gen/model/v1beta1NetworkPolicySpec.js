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
* DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec.
*/
class V1beta1NetworkPolicySpec {
    static getAttributeTypeMap() {
        return V1beta1NetworkPolicySpec.attributeTypeMap;
    }
}
V1beta1NetworkPolicySpec.discriminator = undefined;
V1beta1NetworkPolicySpec.attributeTypeMap = [
    {
        "name": "egress",
        "baseName": "egress",
        "type": "Array<V1beta1NetworkPolicyEgressRule>"
    },
    {
        "name": "ingress",
        "baseName": "ingress",
        "type": "Array<V1beta1NetworkPolicyIngressRule>"
    },
    {
        "name": "podSelector",
        "baseName": "podSelector",
        "type": "V1LabelSelector"
    },
    {
        "name": "policyTypes",
        "baseName": "policyTypes",
        "type": "Array<string>"
    }
];
exports.V1beta1NetworkPolicySpec = V1beta1NetworkPolicySpec;
//# sourceMappingURL=v1beta1NetworkPolicySpec.js.map