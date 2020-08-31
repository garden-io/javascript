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
exports.V1DaemonSet = void 0;
/**
* DaemonSet represents the configuration of a daemon set.
*/
class V1DaemonSet {
    static getAttributeTypeMap() {
        return V1DaemonSet.attributeTypeMap;
    }
}
exports.V1DaemonSet = V1DaemonSet;
V1DaemonSet.discriminator = undefined;
V1DaemonSet.attributeTypeMap = [
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
        "type": "V1DaemonSetSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1DaemonSetStatus"
    }
];
//# sourceMappingURL=v1DaemonSet.js.map