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
* ReplicaSetCondition describes the state of a replica set at a certain point.
*/
class V1beta1ReplicaSetCondition {
    static getAttributeTypeMap() {
        return V1beta1ReplicaSetCondition.attributeTypeMap;
    }
}
V1beta1ReplicaSetCondition.discriminator = undefined;
V1beta1ReplicaSetCondition.attributeTypeMap = [
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
exports.V1beta1ReplicaSetCondition = V1beta1ReplicaSetCondition;
//# sourceMappingURL=v1beta1ReplicaSetCondition.js.map