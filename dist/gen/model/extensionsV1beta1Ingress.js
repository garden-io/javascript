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
exports.ExtensionsV1beta1Ingress = void 0;
/**
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information.
*/
class ExtensionsV1beta1Ingress {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1Ingress.attributeTypeMap;
    }
}
exports.ExtensionsV1beta1Ingress = ExtensionsV1beta1Ingress;
ExtensionsV1beta1Ingress.discriminator = undefined;
ExtensionsV1beta1Ingress.attributeTypeMap = [
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
        "name": "spec",
        "baseName": "spec",
        "type": "ExtensionsV1beta1IngressSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "ExtensionsV1beta1IngressStatus"
    }
];
//# sourceMappingURL=extensionsV1beta1Ingress.js.map