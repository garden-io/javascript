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
exports.V1ReplicaSet = void 0;
/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
*/
class V1ReplicaSet {
    static getAttributeTypeMap() {
        return V1ReplicaSet.attributeTypeMap;
    }
}
exports.V1ReplicaSet = V1ReplicaSet;
V1ReplicaSet.discriminator = undefined;
V1ReplicaSet.attributeTypeMap = [
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
        "type": "V1ReplicaSetSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1ReplicaSetStatus"
    }
];
//# sourceMappingURL=v1ReplicaSet.js.map