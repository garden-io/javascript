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
exports.V1PodIP = void 0;
/**
* IP address information for entries in the (plural) PodIPs field. Each entry includes:    IP: An IP address allocated to the pod. Routable at least within the cluster.
*/
class V1PodIP {
    static getAttributeTypeMap() {
        return V1PodIP.attributeTypeMap;
    }
}
exports.V1PodIP = V1PodIP;
V1PodIP.discriminator = undefined;
V1PodIP.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
//# sourceMappingURL=v1PodIP.js.map