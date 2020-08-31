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
* ReplicaSetStatus represents the current status of a ReplicaSet.
*/
class V1beta2ReplicaSetStatus {
    static getAttributeTypeMap() {
        return V1beta2ReplicaSetStatus.attributeTypeMap;
    }
}
V1beta2ReplicaSetStatus.discriminator = undefined;
V1beta2ReplicaSetStatus.attributeTypeMap = [
    {
        "name": "availableReplicas",
        "baseName": "availableReplicas",
        "type": "number"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1beta2ReplicaSetCondition>"
    },
    {
        "name": "fullyLabeledReplicas",
        "baseName": "fullyLabeledReplicas",
        "type": "number"
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number"
    },
    {
        "name": "readyReplicas",
        "baseName": "readyReplicas",
        "type": "number"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    }
];
exports.V1beta2ReplicaSetStatus = V1beta2ReplicaSetStatus;
//# sourceMappingURL=v1beta2ReplicaSetStatus.js.map