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
* Spec to control the desired behavior of daemon set rolling update.
*/
class V1beta2RollingUpdateDaemonSet {
    static getAttributeTypeMap() {
        return V1beta2RollingUpdateDaemonSet.attributeTypeMap;
    }
}
V1beta2RollingUpdateDaemonSet.discriminator = undefined;
V1beta2RollingUpdateDaemonSet.attributeTypeMap = [
    {
        "name": "maxUnavailable",
        "baseName": "maxUnavailable",
        "type": "object"
    }
];
exports.V1beta2RollingUpdateDaemonSet = V1beta2RollingUpdateDaemonSet;
//# sourceMappingURL=v1beta2RollingUpdateDaemonSet.js.map