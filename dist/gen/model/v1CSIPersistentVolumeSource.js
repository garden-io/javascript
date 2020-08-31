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
exports.V1CSIPersistentVolumeSource = void 0;
/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
class V1CSIPersistentVolumeSource {
    static getAttributeTypeMap() {
        return V1CSIPersistentVolumeSource.attributeTypeMap;
    }
}
exports.V1CSIPersistentVolumeSource = V1CSIPersistentVolumeSource;
V1CSIPersistentVolumeSource.discriminator = undefined;
V1CSIPersistentVolumeSource.attributeTypeMap = [
    {
        "name": "controllerExpandSecretRef",
        "baseName": "controllerExpandSecretRef",
        "type": "V1SecretReference"
    },
    {
        "name": "controllerPublishSecretRef",
        "baseName": "controllerPublishSecretRef",
        "type": "V1SecretReference"
    },
    {
        "name": "driver",
        "baseName": "driver",
        "type": "string"
    },
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "nodePublishSecretRef",
        "baseName": "nodePublishSecretRef",
        "type": "V1SecretReference"
    },
    {
        "name": "nodeStageSecretRef",
        "baseName": "nodeStageSecretRef",
        "type": "V1SecretReference"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "volumeAttributes",
        "baseName": "volumeAttributes",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "volumeHandle",
        "baseName": "volumeHandle",
        "type": "string"
    }
];
//# sourceMappingURL=v1CSIPersistentVolumeSource.js.map