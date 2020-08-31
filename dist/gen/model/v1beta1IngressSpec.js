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
* IngressSpec describes the Ingress the user wishes to exist.
*/
class V1beta1IngressSpec {
    static getAttributeTypeMap() {
        return V1beta1IngressSpec.attributeTypeMap;
    }
}
V1beta1IngressSpec.discriminator = undefined;
V1beta1IngressSpec.attributeTypeMap = [
    {
        "name": "backend",
        "baseName": "backend",
        "type": "V1beta1IngressBackend"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1beta1IngressRule>"
    },
    {
        "name": "tls",
        "baseName": "tls",
        "type": "Array<V1beta1IngressTLS>"
    }
];
exports.V1beta1IngressSpec = V1beta1IngressSpec;
//# sourceMappingURL=v1beta1IngressSpec.js.map