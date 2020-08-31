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
exports.V1DaemonSetSpec = void 0;
/**
* DaemonSetSpec is the specification of a daemon set.
*/
class V1DaemonSetSpec {
    static getAttributeTypeMap() {
        return V1DaemonSetSpec.attributeTypeMap;
    }
}
exports.V1DaemonSetSpec = V1DaemonSetSpec;
V1DaemonSetSpec.discriminator = undefined;
V1DaemonSetSpec.attributeTypeMap = [
    {
        "name": "minReadySeconds",
        "baseName": "minReadySeconds",
        "type": "number"
    },
    {
        "name": "revisionHistoryLimit",
        "baseName": "revisionHistoryLimit",
        "type": "number"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "V1PodTemplateSpec"
    },
    {
        "name": "updateStrategy",
        "baseName": "updateStrategy",
        "type": "V1DaemonSetUpdateStrategy"
    }
];
//# sourceMappingURL=v1DaemonSetSpec.js.map