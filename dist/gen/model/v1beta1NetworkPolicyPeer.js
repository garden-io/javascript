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
* DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
*/
class V1beta1NetworkPolicyPeer {
    static getAttributeTypeMap() {
        return V1beta1NetworkPolicyPeer.attributeTypeMap;
    }
}
V1beta1NetworkPolicyPeer.discriminator = undefined;
V1beta1NetworkPolicyPeer.attributeTypeMap = [
    {
        "name": "ipBlock",
        "baseName": "ipBlock",
        "type": "V1beta1IPBlock"
    },
    {
        "name": "namespaceSelector",
        "baseName": "namespaceSelector",
        "type": "V1LabelSelector"
    },
    {
        "name": "podSelector",
        "baseName": "podSelector",
        "type": "V1LabelSelector"
    }
];
exports.V1beta1NetworkPolicyPeer = V1beta1NetworkPolicyPeer;
//# sourceMappingURL=v1beta1NetworkPolicyPeer.js.map