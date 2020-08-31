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
exports.V1JobCondition = void 0;
/**
* JobCondition describes current state of a job.
*/
class V1JobCondition {
    static getAttributeTypeMap() {
        return V1JobCondition.attributeTypeMap;
    }
}
exports.V1JobCondition = V1JobCondition;
V1JobCondition.discriminator = undefined;
V1JobCondition.attributeTypeMap = [
    {
        "name": "lastProbeTime",
        "baseName": "lastProbeTime",
        "type": "Date"
    },
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=v1JobCondition.js.map