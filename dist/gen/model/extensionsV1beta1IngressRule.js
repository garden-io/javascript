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
exports.ExtensionsV1beta1IngressRule = void 0;
/**
* IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
*/
class ExtensionsV1beta1IngressRule {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1IngressRule.attributeTypeMap;
    }
}
exports.ExtensionsV1beta1IngressRule = ExtensionsV1beta1IngressRule;
ExtensionsV1beta1IngressRule.discriminator = undefined;
ExtensionsV1beta1IngressRule.attributeTypeMap = [
    {
        "name": "host",
        "baseName": "host",
        "type": "string"
    },
    {
        "name": "http",
        "baseName": "http",
        "type": "ExtensionsV1beta1HTTPIngressRuleValue"
    }
];
//# sourceMappingURL=extensionsV1beta1IngressRule.js.map