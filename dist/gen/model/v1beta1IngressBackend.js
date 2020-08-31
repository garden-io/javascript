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
* IngressBackend describes all endpoints for a given service and port.
*/
class V1beta1IngressBackend {
    static getAttributeTypeMap() {
        return V1beta1IngressBackend.attributeTypeMap;
    }
}
V1beta1IngressBackend.discriminator = undefined;
V1beta1IngressBackend.attributeTypeMap = [
    {
        "name": "serviceName",
        "baseName": "serviceName",
        "type": "string"
    },
    {
        "name": "servicePort",
        "baseName": "servicePort",
        "type": "object"
    }
];
exports.V1beta1IngressBackend = V1beta1IngressBackend;
//# sourceMappingURL=v1beta1IngressBackend.js.map