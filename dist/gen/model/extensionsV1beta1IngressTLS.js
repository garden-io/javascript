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
exports.ExtensionsV1beta1IngressTLS = void 0;
/**
* IngressTLS describes the transport layer security associated with an Ingress.
*/
class ExtensionsV1beta1IngressTLS {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1IngressTLS.attributeTypeMap;
    }
}
exports.ExtensionsV1beta1IngressTLS = ExtensionsV1beta1IngressTLS;
ExtensionsV1beta1IngressTLS.discriminator = undefined;
ExtensionsV1beta1IngressTLS.attributeTypeMap = [
    {
        "name": "hosts",
        "baseName": "hosts",
        "type": "Array<string>"
    },
    {
        "name": "secretName",
        "baseName": "secretName",
        "type": "string"
    }
];
//# sourceMappingURL=extensionsV1beta1IngressTLS.js.map