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
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
class V1beta2DaemonSetUpdateStrategy {
    static getAttributeTypeMap() {
        return V1beta2DaemonSetUpdateStrategy.attributeTypeMap;
    }
}
V1beta2DaemonSetUpdateStrategy.discriminator = undefined;
V1beta2DaemonSetUpdateStrategy.attributeTypeMap = [
    {
        "name": "rollingUpdate",
        "baseName": "rollingUpdate",
        "type": "V1beta2RollingUpdateDaemonSet"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1beta2DaemonSetUpdateStrategy = V1beta2DaemonSetUpdateStrategy;
//# sourceMappingURL=v1beta2DaemonSetUpdateStrategy.js.map