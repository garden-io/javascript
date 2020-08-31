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
exports.V2beta1HorizontalPodAutoscaler = void 0;
/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
*/
class V2beta1HorizontalPodAutoscaler {
    static getAttributeTypeMap() {
        return V2beta1HorizontalPodAutoscaler.attributeTypeMap;
    }
}
exports.V2beta1HorizontalPodAutoscaler = V2beta1HorizontalPodAutoscaler;
V2beta1HorizontalPodAutoscaler.discriminator = undefined;
V2beta1HorizontalPodAutoscaler.attributeTypeMap = [
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
        "type": "V2beta1HorizontalPodAutoscalerSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V2beta1HorizontalPodAutoscalerStatus"
    }
];
//# sourceMappingURL=v2beta1HorizontalPodAutoscaler.js.map