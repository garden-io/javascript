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
exports.V2beta1ExternalMetricSource = void 0;
/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one \"target\" type should be set.
*/
class V2beta1ExternalMetricSource {
    static getAttributeTypeMap() {
        return V2beta1ExternalMetricSource.attributeTypeMap;
    }
}
exports.V2beta1ExternalMetricSource = V2beta1ExternalMetricSource;
V2beta1ExternalMetricSource.discriminator = undefined;
V2beta1ExternalMetricSource.attributeTypeMap = [
    {
        "name": "metricName",
        "baseName": "metricName",
        "type": "string"
    },
    {
        "name": "metricSelector",
        "baseName": "metricSelector",
        "type": "V1LabelSelector"
    },
    {
        "name": "targetAverageValue",
        "baseName": "targetAverageValue",
        "type": "string"
    },
    {
        "name": "targetValue",
        "baseName": "targetValue",
        "type": "string"
    }
];
//# sourceMappingURL=v2beta1ExternalMetricSource.js.map