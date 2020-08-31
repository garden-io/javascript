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
exports.V2beta2HorizontalPodAutoscaler = void 0;
/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
*/
class V2beta2HorizontalPodAutoscaler {
    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscaler.attributeTypeMap;
    }
}
exports.V2beta2HorizontalPodAutoscaler = V2beta2HorizontalPodAutoscaler;
V2beta2HorizontalPodAutoscaler.discriminator = undefined;
V2beta2HorizontalPodAutoscaler.attributeTypeMap = [
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
        "type": "V2beta2HorizontalPodAutoscalerSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V2beta2HorizontalPodAutoscalerStatus"
    }
];
//# sourceMappingURL=v2beta2HorizontalPodAutoscaler.js.map