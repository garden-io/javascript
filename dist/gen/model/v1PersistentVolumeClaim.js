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
exports.V1PersistentVolumeClaim = void 0;
/**
* PersistentVolumeClaim is a user\'s request for and claim to a persistent volume
*/
class V1PersistentVolumeClaim {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaim.attributeTypeMap;
    }
}
exports.V1PersistentVolumeClaim = V1PersistentVolumeClaim;
V1PersistentVolumeClaim.discriminator = undefined;
V1PersistentVolumeClaim.attributeTypeMap = [
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
        "type": "V1PersistentVolumeClaimSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1PersistentVolumeClaimStatus"
    }
];
//# sourceMappingURL=v1PersistentVolumeClaim.js.map