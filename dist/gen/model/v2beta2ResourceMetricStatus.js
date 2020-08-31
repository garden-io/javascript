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
exports.V2beta2ResourceMetricStatus = void 0;
/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
class V2beta2ResourceMetricStatus {
    static getAttributeTypeMap() {
        return V2beta2ResourceMetricStatus.attributeTypeMap;
    }
}
exports.V2beta2ResourceMetricStatus = V2beta2ResourceMetricStatus;
V2beta2ResourceMetricStatus.discriminator = undefined;
V2beta2ResourceMetricStatus.attributeTypeMap = [
    {
        "name": "current",
        "baseName": "current",
        "type": "V2beta2MetricValueStatus"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=v2beta2ResourceMetricStatus.js.map