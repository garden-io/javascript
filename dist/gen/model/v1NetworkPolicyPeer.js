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
exports.V1NetworkPolicyPeer = void 0;
/**
* NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
*/
class V1NetworkPolicyPeer {
    static getAttributeTypeMap() {
        return V1NetworkPolicyPeer.attributeTypeMap;
    }
}
exports.V1NetworkPolicyPeer = V1NetworkPolicyPeer;
V1NetworkPolicyPeer.discriminator = undefined;
V1NetworkPolicyPeer.attributeTypeMap = [
    {
        "name": "ipBlock",
        "baseName": "ipBlock",
        "type": "V1IPBlock"
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
//# sourceMappingURL=v1NetworkPolicyPeer.js.map